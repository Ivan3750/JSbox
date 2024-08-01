const express = require("express");
const mongoose = require('mongoose');

const { MainModel } = require("./db.js");


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
  
  
  


module.exports = router;
