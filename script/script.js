const themebox = document.querySelector(".section__theme")
fetch('./json/data.json')
.then(response => response.json())
.then(data => {
    for(let  i = data.length; i != 0; i--){
        themebox.innerHTML += `
        <a href="./pages/info.html">
        <h2 class="theme-name"></h2>
        </a>
        `
    }
    const themename = document.querySelectorAll(".theme-name")
    themename.forEach((element, index) => {
        console.log(data[index].title)
        element.innerHTML =  data[index].title
        element.addEventListener("click",()=>{
            sessionStorage.setItem("IndexTheme", index);
        })
    });


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

























  })
  .catch(error => {
    // Обробляємо помилки
    console.error('Помилка при отриманні JSON:', error);
  });

