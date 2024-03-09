let result = 5 + 5 + "5";
console.log(result);


const email = "kohan3750@gmail.com";
if (email.includes("@")) {
   console.log("Електрона адреса вказана вірно")
}else{
   console.log("Електрона адреса вказана не вірно");
}

console.log(email.length)
let My = "My", Names = "name", Is = "is";
let fullName = `${My} ${Names} ${Is}`;
fullName += " Viktor";
console.log(fullName);

let userName = prompt("Вкажіть ім'я")
let payment = Math.round(Math.random(20-100)*100)
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`)