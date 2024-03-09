






    
/*     
    Створити розмітку з двома текстовими полями та кнопкою.
     При натисканні на кнопку перевіряти, чи обидва поля містять значення,
      якщо так, то виводити повідомлення "Обидва поля заповнені",¨
       якщо ні — "Не всі поля заповнені". */

/* const { button } = require("telegraf/typings/markup");
 */

       const form = document.querySelector(".form")
      
       form.addEventListener("submit", function(event){
        let NameInput = document.querySelector(".Name").value  
        let SurnameInput = document.querySelector(".Surname").value
        event.preventDefault()

            if (NameInput.length > 0 && SurnameInput.length > 0){
                alert('Обидва поля заповнені')
            }else{
                alert('Не всі поля заповнені')
            }


    });


 /*    Створити розмітку  з двома числовими полями та кнопкою
 . При натисканні на кнопку перевіряти, чи сума значень полів більша за 10
 , якщо так, то виводити повідомлення "Сума більша за 10", якщо ні — "Сума менша або дорівнює 10".
 */


 const Numbers = document.querySelector(".NumberForm")
      
       Numbers.addEventListener("submit", function(numbers){
        let fNum = document.querySelector(".fNum").value  
        let sNum = document.querySelector(".sNum").value
    
        
        numbers.preventDefault()
     
           if ((parseInt(fNum) + parseInt(sNum) ) > 10){
            alert("Сума більша за 10")
           }else{
            alert('Сумма менше або дорівнює 10')
           }




    });

/* 
    Створити розмітку  з текстовим полем та кнопкою. При натисканні
     на кнопку перевіряти, чи введений текст містить слово "JavaScript", 
     якщо так, то виводити повідомлення "Текст містить слово JavaScript",
     якщо ні — "Текст не містить слово JavaScript".
 */


     const JS = document.querySelector(".JS")
      
     JS.addEventListener("submit", function(js){
    let JSinput = document.querySelector(".JS-input").value 
  
      
      js.preventDefault()
   
        if (JSinput.includes("JavaScript")) {
            alert("Текст містить слово JavaScript");
        } else {
            alert("Текст не містить слово JavaScript");
            
        }



  });



/*   Створити розмітку  з формою з полями введення та кнопкою. 
При натисканні на кнопку перевіряти, чи введене число більше за 10
 та менше за 20, якщо так, то виводити повідомлення "Число входить
  в діапазон від 10 до 20", якщо ні — "Число не входить в діапазон від 10 до 20".
 */






  const Number = document.querySelector(".Number")
      
  Number.addEventListener("submit", function(numzone){
 let inputNumber = document.querySelector(".number-input").value 

   
   numzone.preventDefault()
    
   if (inputNumber > 10 && inputNumber < 20) {
    alert("Число входить в діапазон від 10 до 20")
} else {
       alert("Число не входить в діапазон від 10 до 20")    
   }



});







  /* Створити розмітку  з формою з полями введення та кнопкою. 
  При натисканні на кнопку перевіряти, чи введені дані правильно заповнені,
   якщо так, то перенаправляти на іншу сторінку, якщо ні — виводити повідомлення про помилку.
    Правильно заповнені дані: ім'я містить не менше
     3 символів, email містить символ @ та крапку після неї, пароль містить не менше 6 символів. */


     const Regist = document.querySelector(".Regist")
      
  Regist.addEventListener("submit", function(regist){
 let Email = document.querySelector(".Email").value 
 let Name = document.querySelector(".Name").value 
 let Password = document.querySelector(".Password").value 

   
   regist.preventDefault()
    
   if (Email.length > 3 || Email.includes("@") || Email.includes(".")  || Password.length > 6) {
    window.location.href="https://www.google.com"
   } else {
    alert("Error")
   }



});