/* TASK 1 */


const bankAccount = {
    ownerName:  "John Doe",
    accountNumber:   123456789,
    balance: 0

}

const withrawBTN = document.querySelector('.withraw');
const depositBTN = document.querySelector('.deposit');
const inputBalance = document.querySelector('.number-bc');

bankAccount.deposit = function(){
    console.log(inputBalance.value)
    bankAccount.balance +=  Number(inputBalance.value)
    alert(` ${bankAccount.ownerName} has ${bankAccount.balance}`);
}
bankAccount.withraw = function(){
    if(this.balance != 0){
        bankAccount.balance -=  Number(inputBalance.value)
        alert(` ${bankAccount.ownerName} has ${bankAccount.balance}`);
    }else{
        alert("You dont have " + inputBalance.value)
    }
}




withrawBTN.addEventListener("click", ()=>{
    
    bankAccount.withraw()
})


depositBTN.addEventListener("click", ()=>{
    
    bankAccount.deposit()
})

/* TASK 2 */


let weatherInput = document.querySelector('.weather');
let weather = {
    temperature: "",
    humidity:  "90%",
    windSpeed:  "10km/h"
}




weather.checkTemp =  function (){
    this.temperature = weatherInput.value
    if(this.temperature > 0){
        return false
    }else{
        alert("температура нижче 0 градусів Цельсія")
        return true
    }
}


weatherInput.addEventListener("input", ()=>{
    weather.checkTemp()
})


/* TASK 3 */

let InputName = document.querySelector(".name-input")
let InputEmail = document.querySelector(".email-input")
let InputPassword = document.querySelector(".password-input")
let btnSubmit = document.querySelector(".btn-submit")
let user = {
    name: InputName,
    email: InputEmail,
    password: InputPassword
}

user.login = function(){
    if(!user.email.includes("@") && user.email.length < 10 && !user.email.includes(".")){
       alert("Вкажіть вірну пошту")
      }else if(this.password.length < 10){
       alert("Пароль повинен бути важчим")
      }else{
       alert("Успішно!")
    }
}


btnSubmit.addEventListener("click", ()=>{

   user.name = InputName.value   
   user.email = InputEmail.value   
   user.password = InputPassword.value   
   user.login()

})


/* TASK 4 */

const movie = {
    title: "Best film",
    director : "Ivan",
    year: 2024,
    rating: 10
 
 }
 movie.checkRating = function(){
 
 
    if(this.rating > 8){
       return true 
    }else{
       return false
    }
 
 }
 
 alert(movie.checkRating())