const themebox = document.querySelector(".section__theme");

let moduleIndex = location.pathname.substring(location.pathname.lastIndexOf("/") + 1)

let diferentIndex = 3
const gradients = [
    { start: 'rgb(255, 187, 0)', end: 'rgb(84, 62, 0)' },
    { start: 'rgb(112, 193, 77)', end: 'rgb(37, 61, 27)' },
    { start: 'rgb(50, 197, 255)', end: 'rgb(0, 81, 95)' },
    { start: 'rgb(1, 145, 255)', end: 'rgb(0, 63, 111)' }
];





fetch(`/api/themes/${location.pathname.substring(location.pathname.lastIndexOf("/") + 1)}`)
.then(response => response.json())
.then(data => {

    if (Array.isArray(data.modules)) {
        data.modules.forEach(module => {
            if (Array.isArray(module.topics)) {
                module.topics.forEach((topic, index) => {
                    themebox.innerHTML += `
                        <div class="theme" >
                            <h2 class="theme-name">${topic.title}</h2>
                            <div class="theme-links"> 
                                ${topic.files.map(file => `
                                    <a href="/api/download/${moduleIndex}/${index + 1}"  download class="theme-download" aria-label="Download  ${file.description}"><img src="../images/download.svg" class="link-icon" alt=""></a>
                                    <a href="${file.url}" class="theme-view" aria-label="View ${file.description}"><img src="../images/view.svg" class="link-icon" alt=""></a>
                                `).join('')}
                            </div>
                        </div>
                    `;
                });


                const themes = document.querySelectorAll('.theme');
                themes.forEach((theme)=>{
                    theme.style.background = /* `linear-gradient(180deg, ${gradients[moduleIndex - diferentIndex].start}, 
                    ${gradients[moduleIndex - diferentIndex].end} 100%)`; */ gradients[moduleIndex - diferentIndex].start
                })
            
            
                document.querySelectorAll(".theme-name").forEach((element, index) => {
                    element.addEventListener("click", () => {
                        sessionStorage.setItem("IndexTheme", index);
                    });
                });
            } else {
                console.error('Expected topics to be an array');
            }
        });
    } else {
        console.error('Expected modules to be an array');
    }
})
.catch(error => {
    console.error('Error fetching data:', error);
});
/* 

    window.addEventListener("load", function(){
        const TOKEN = "6917599115:AAHucfqNurqLNO2C5rSSaKTJmCQZaaQDA10"
const CHAT_ID = "-1002054812213";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const btnSubmit = document.querySelector('.btn__submit');

let message = `<b>Вхід на сайт</b>\n`;
axios.post(URI_API, {
  chat_id: CHAT_ID,
  parse_mode: "html",
  text: message
  });



    })

  .catch(error => {
    // Обробляємо помилки
    console.error('Помилка при отриманні JSON:', error);
  });
 */
