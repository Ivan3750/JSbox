const TOKEN = "6917599115:AAHucfqNurqLNO2C5rSSaKTJmCQZaaQDA10"
const CHAT_ID = "-1002054812213";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const btnSubmit = document.querySelector('.btn__submit');
const inputTxt = document.querySelector('.input__txt');
const inputRange = document.querySelector('.rangeInput');
const IndexTheme =Number(sessionStorage.getItem('IndexTheme'))+1

btnSubmit.addEventListener("click", ()=>{
    let message = `<b>Нове повідомлення</b>\n`;
        message += `<b>Тема: </b> ${IndexTheme}\n`;
       message += `<b>Відгук: </b> ${inputTxt.value}\n`;
    message += `<b>Оцінка: </b> ${inputRange.value}\n`
    axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message
      });
      alert("Відправлено")
})


