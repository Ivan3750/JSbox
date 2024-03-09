/* Напиши сценарій керування особистим кабінетом інтернет-банку.
 Є об'єкт account в якому необхідно реалізувати методи для роботи
  з балансом та історією транзакцій.



  потрібно отримати історію 
 */


const userBalance  = document.querySelector('.balance');
let account = {
    name: "John Doe",
    balance: 100,
    transaction:  [
        {type:"deposit", amount: 100, date: "04/02/2024", time: "12:45"},
        {type:"withdrawal", amount: 50,  date: "03/02/2024", time: "17:28"}
    ],
}



let dataNow;

account.withdrawal = function(){
    const inputNum = document.querySelector('.number');
    dataNow = new Date()
    if(this.balance >= Number(inputNum.value)){
        this.balance -= Number(inputNum.value)
        this.transaction.push({type: "widthrawal", account:Number(inputNum.value), date: dataNow, status: "successfully"})
        userBalance.innerHTML = account.balance
    }else{
        this.transaction.push({type: "widthrawal", account:Number(inputNum.value),  date: dataNow, status: "error"})
    }
}
account.deposit = function(){
     dataNow = new Date()
    const inputNum = document.querySelector('.number');
    this.balance += Number(inputNum.value)
    this.transaction.push({type: "deposit", 
    account:Number(inputNum.value),
    date: dataNow, status: "successfully"})
    userBalance.innerHTML = this.balance
    
}