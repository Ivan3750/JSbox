window.addEventListener("load", function() {
const drinksList = document.querySelector('.list');
const selectedTxt = document.querySelector('.Selected-txt');

drinksList.addEventListener("change", function() {
    switch(drinksList.value) {
        case "Coffe": 
            selectedTxt.innerHTML = "Кофе";
            break;
        case "Tea": 
            selectedTxt.innerHTML = "Чай";
            break;
        case "Juice": 
            selectedTxt.innerHTML = "Сік";
            break;
        case "None": 
            selectedTxt.innerHTML = "-";
            break;
    }
});



const daysInput = document.querySelector('.days-input');
const daysOutput = document.querySelector('.days-output');
const workingDag = ["понеділок","вівторок","середа","четверг","п'ятниця","Понеділок","Вівторок","Середа","Четверг","П'ятниця"]
const weekend = ["субота","неділя","Субота","Неділя"]
daysInput.addEventListener("change",() =>{
    switch(true){
        case (workingDag.includes(daysInput.value)):
            daysOutput.innerHTML = "Робочий день"
            break;
        case (weekend.includes(daysInput.value)):
            daysOutput.innerHTML = "Вихідний"
            break;
        default: 
            daysOutput.innerHTML = "Error"



        }
        
        
        
    })    
})    
function getSeason() {
    let monthInput = document.getElementById("monthInput").value;

    if ( monthInput >= 1 && monthInput <= 12) {
        let season = "";
        switch (parseInt(monthInput)) {
            case 12:
            case 1:
            case 2:
                season = "Зима";
                break;
            case 3:
            case 4:
            case 5:
                season = "Весна";
                break;
            case 6:
            case 7:
            case 8:
                season = "Літо";
                break;
            case 9:
            case 10:
            case 11:
                season = "Осінь";
                break;
        }

        alert("Місяць " + monthInput + " належить до пори року: " + season);
    } else {
        alert("Будь ласка, введіть коректний номер місяця (від 1 до 12).");
    }
}






function performAction() {
    let colorInput = document.getElementById("colorInput").value.toLowerCase();

    let action = "";
    switch (colorInput) {
        case "червоний":
            action = "Стоп";
            break;
        case "зелений":
            action = "Йти";
            break;
        case "жовтий":
            action = "Чекати";
            break;
        default:
            action = "Невідомий колір";
            break;
    }

    alert("Дія для кольору " + colorInput + ": " + action);
}









function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;


    let result = 0;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("Ділення на нуль неможливе.");
                return;
            }
            break;
        default:
            alert("Оберіть операцію.");
            return;
    }

    alert("Результат: " + result);
}

function getDaysInMonth() {
    let monthInput = document.getElementById("monthInput").value;

    if (monthInput >= 1 && monthInput <= 12) {
        let date = new Date(2024, monthInput, 0);
    let daysInMonth = date.getDate();

        alert("У місяці " + monthInput +" кількість днів: " + daysInMonth);
    } else {
        alert("Будь ласка, введіть коректний номер місяця (від 1 до 12).");
    }
}








