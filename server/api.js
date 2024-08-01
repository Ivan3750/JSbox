const express = require("express");
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const { MainModel,ModuleSchema  } = require("./db.js");


const router = express.Router();


router.get('/themes', async (req, res) => {
    try {
      const themes = await MainModel.find();
      res.json(themes);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });


  router.get('/themes/:code', async (req, res) => {
    try {
     
      const theme = await MainModel.findOne({ 'modules.code': req.params.code });
      if (!theme) {
        return res.status(404).send("Theme not found");
      }
      res.json(theme);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  
  // Create a new theme
  router.post('/themes', async (req, res) => {
    try {
      const newTheme = new MainModel(req.body);
      await newTheme.save();
      res.status(201).json(newTheme);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });


  router.post('/modules', async (req, res) => {
    const { code, name, moduleTitle, moduleDescription, topics } = req.body;
  
    if (!code || !name || !moduleTitle || !topics || !Array.isArray(topics)) {
      return res.status(400).send('Invalid data');
    }
  
    const module = {
      code: code, // Use the provided custom ID
      title: moduleTitle,
      description: moduleDescription,
      topics: topics.map(topic => ({
        title: topic.title,
        description: topic.description,
        files: topic.files
      }))
    };
  
    try {
  
  
      const newModule = new MainModel({ name, modules: [module] });
      await newModule.save();
      res.status(201).send(newModule);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  
  router.get('/download/:module/:id', (req, res) => {
    // Отримуємо параметри з URL
    const { module, id } = req.params; // Використовуємо req.params замість req.body для параметрів маршруту
  
    // Визначаємо шляхи до каталогу та вихідного ZIP-файлу
    const sourceDir = path.join(__dirname, "../storage", module, id);
    const outputFilePath = path.join(__dirname, "../storage", module, id, "archive.zip");
  
    // Створюємо потік для запису файлів в ZIP
    const output = fs.createWriteStream(outputFilePath);
    const archive = archiver('zip', {
      zlib: { level: 9 } // Максимальний рівень стиснення
    });
  
    // Обробка подій
    output.on('close', function () {
      console.log(`Архів створено: ${archive.pointer()} байт`);
  
      // Після завершення архівації відправляємо файл клієнту
      res.download(outputFilePath, 'archive.zip', (err) => {
        if (err) {
          console.error('Помилка під час завантаження файлу:', err);
          res.status(500).send('Помилка під час завантаження файлу');
        } else {
          // Опціонально: Видалення файлу після завантаження
          fs.unlink(outputFilePath, (unlinkErr) => {
            if (unlinkErr) {
              console.error('Помилка під час видалення файлу:', unlinkErr);
            } else {
              console.log('Файл успішно видалено після завантаження');
            }
          });
        }
      });
    });
  
    archive.on('error', function (err) {
      console.error('Помилка архівації:', err);
      res.status(500).send('Помилка архівації');
    });
  
    // Підключаємо архів до потоку
    archive.pipe(output);
  
    // Додаємо файли з каталогу до архіву
    fs.readdir(sourceDir, (err, files) => {
      if (err) {
        console.error('Помилка читання каталогу:', err);
        res.status(500).send('Помилка читання каталогу');
        return;
      }
  
      files.forEach(file => {
        const filePath = path.join(sourceDir, file);
        archive.file(filePath, { name: file });
      });
  
      // Завершуємо архівацію
      archive.finalize();
    });
  });
  



// Models
const Module = mongoose.model('Module', ModuleSchema);

// Module CRUD Operations
router.post('/modules', async (req, res) => {
  try {
    const module = new Module(req.body);
    await module.save();
    res.status(201).json(module);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/modules', async (req, res) => {
  try {
    const modules = await Module.find();
    res.json(modules);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/modules/:id', async (req, res) => {
  try {
    const module = await Module.find(req.params.id);
    if (module) {
      res.json(module);
    } else {
      res.status(404).json({ message: 'Module not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/modules/:id', async (req, res) => {
  try {
    const module = await Module.findAndUpdate(req.params.id, req.body, { new: true });
    if (module) {
      res.json(module);
    } else {
      res.status(404).json({ message: 'Module not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/modules/:id', async (req, res) => {
  try {
    const module = await Module.findAndDelete(req.params.id);
    if (module) {
      res.json(module);
    } else {
      res.status(404).json({ message: 'Module not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Topic CRUD Operations within a Module
router.post('/modules/:moduleId/topics', async (req, res) => {
  try {
    const module = await Module.find(req.params.moduleId);
    if (module) {
      module.topics.push(req.body);
      await module.save();
      res.status(201).json(module);
    } else {
      res.status(404).json({ message: 'Module not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/modules/:moduleId/topics/:topicId', async (req, res) => {
  try {
    const module = await Module.find(req.params.moduleId);
    if (module) {
      const topic = module.topics.id(req.params.topicId);
      if (topic) {
        topic.set(req.body);
        await module.save();
        res.json(module);
      } else {
        res.status(404).json({ message: 'Topic not found' });
      }
    } else {
      res.status(404).json({ message: 'Module not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/modules/:moduleId/topics/:topicId', async (req, res) => {
  try {
    const module = await Module.find(req.params.moduleId);
    if (module) {
      const topic = module.topics.id(req.params.topicId);
      if (topic) {
        topic.remove();
        await module.save();
        res.json(module);
      } else {
        res.status(404).json({ message: 'Topic not found' });
      }
    } else {
      res.status(404).json({ message: 'Module not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// File CRUD Operations within a Topic
router.post('/modules/:moduleId/topics/:topicId/files', async (req, res) => {
  try {
    const module = await Module.find(req.params.moduleId);
    if (module) {
      const topic = module.topics.id(req.params.topicId);
      if (topic) {
        topic.files.push(req.body);
        await module.save();
        res.status(201).json(module);
      } else {
        res.status(404).json({ message: 'Topic not found' });
      }
    } else {
      res.status(404).json({ message: 'Module not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/modules/:moduleId/topics/:topicId/files/:fileId', async (req, res) => {
  try {
    const module = await Module.find(req.params.moduleId);
    if (module) {
      const topic = module.topics.id(req.params.topicId);
      if (topic) {
        const file = topic.files.id(req.params.fileId);
        if (file) {
          file.set(req.body);
          await module.save();
          res.json(module);
        } else {
          res.status(404).json({ message: 'File not found' });
        }
      } else {
        res.status(404).json({ message: 'Topic not found' });
      }
    } else {
      res.status(404).json({ message: 'Module not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/modules/:moduleId/topics/:topicId/files/:fileId', async (req, res) => {
  try {
    const module = await Module.find(req.params.moduleId);
    if (module) {
      const topic = module.topics.id(req.params.topicId);
      if (topic) {
        const file = topic.files.id(req.params.fileId);
        if (file) {
          file.remove();
          await module.save();
          res.json(module);
        } else {
          res.status(404).json({ message: 'File not found' });
        }
      } else {
        res.status(404).json({ message: 'Topic not found' });
      }
    } else {
      res.status(404).json({ message: 'Module not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


module.exports = router;
