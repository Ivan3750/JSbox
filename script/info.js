let IndexTheme = Number.parseInt(sessionStorage.getItem("IndexTheme")) + 1
const taskbox = document.querySelector('.task-box');
fetch('../json/info.json')
.then(response => response.json())
.then(data => {
    const downloadBox = document.querySelector('.download-box');
    dataElement = data.find(element => element.id == IndexTheme)
    console.log(dataElement)
    console.log(IndexTheme)
    const title = document.querySelector('.title');
    
    title.innerHTML =  dataElement.theme


    if(dataElement.file != ""){
        const btnDOWN = document.createElement("a");
    btnDOWN.href = `../material/${dataElement.file}`;
    let parts = dataElement.file.split('.');
    let extension = parts[parts.length - 1];
    console.log(extension)
    btnDOWN.download = `${dataElement.theme}.${extension}`;
    btnDOWN.className = "download-btn";
    btnDOWN.textContent = "Download";
    console.log(btnDOWN);
    downloadBox.appendChild(btnDOWN);

    }
    for (let i = 0; i != dataElement.task.length; i++) {
        taskbox.innerHTML += `<p class="task-name">Створити змінну з іменем age і присвоїти їй значення свого віку. Вивести значення цієї змінної в консоль.</p>`;
        const taskName = document.querySelectorAll('.task-name');        
            taskName[i].textContent = dataElement.task[i].text;
            console.log(taskName[i].innerContent = dataElement.task[i].text)
            if (dataElement.task[i].result !== "") {
                taskbox.innerHTML += `<div class="task-code">
                <div class="task-result"></div>
                </div>`;
                const taskResult = document.querySelectorAll('.task-result');
                taskResult[i].textContent = dataElement.task[i].result;
            }
        }
    
  })
  .catch(error => {
    // Обробляємо помилки
    console.error('Помилка при отриманні JSON:', error);
  });
