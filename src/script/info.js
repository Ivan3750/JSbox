let IndexTheme = Number.parseInt(sessionStorage.getItem("IndexTheme")) + 1
const taskbox = document.querySelector('.task-box');

const theme = document.querySelectorAll('.theme');

let diferentIndex = 2
const gradients = [
    { start: 'rgb(255, 187, 0)', end: 'rgb(84, 62, 0)' },
    { start: 'rgb(112, 193, 77)', end: 'rgb(37, 61, 27)' },
    { start: 'rgb(50, 197, 255)', end: 'rgb(0, 81, 95)' },
    { start: 'rgb(1, 145, 255)', end: 'rgb(0, 63, 111)' }
];


window.addEventListener("load", ()=>{
    theme.style.background = `linear-gradient(180deg, ${gradient[IndexTheme - diferentIndex].start}, 
                                                        ${gradient[IndexTheme - diferentIndex].end} 100%)`;
                                                    })
                                                    console.log("d")





fetch('../json/info.json')
.then(response => response.json())
.then(data => {
    
    const downloadBox = document.querySelector('.download-box');
    dataElement = data.find(element => element.id == IndexTheme)
    console.log("This" + dataElement)
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


    const btnOpen = document.createElement("a")
    btnOpen.className = "download-btn"
    btnOpen.textContent = "Open"
    btnOpen.href = `./${IndexTheme}/index.html`
    console.log(btnOpen)
    downloadBox.appendChild(btnOpen);

    const btnFeedback = document.createElement("a")
    btnFeedback.classList = "download-btn"
    btnFeedback.href="../pages/contact.html"
    btnFeedback.textContent="Write Feedback"
    downloadBox.appendChild(btnFeedback);


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
