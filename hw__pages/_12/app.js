

 /* TASK 1 */


 const btnHello = document.querySelector('.sayhello');
const sayHello = (()=>{


})
btnHello.addEventListener("click" , ()=>{
    alert("Hello World!")
})

/* TASK 2 */


const guessField = document.querySelector('.guessField');

const randNum = (() => Math.round(Math.random() * 100 + 1));



const guessResult = document.querySelector('.guessResult');

const checkGuess = function(){
    guessResult.innerHTML = randNum();
}
/* TASK 3 */

let clicks = 0


window.addEventListener("click", ()=>{
    clicks++
    console.log(clicks)
})

/* TASK 4 */
const applyCallbackToEachElement = (arr, callback) => {
    return arr.map(callback);
}

const arr = [1, 2, 3, 4, 5];

const squareCallback = (num) => num ** 2;
        
    const result = applyCallbackToEachElement(arr, squareCallback);
    console.log(result); 

/* TASK 5 */

const calculateDiscountedPrice = (price,discount, callback) => {
    let disPrice = price - ((price/100)*discount)
    callback(disPrice)
}
const showDiscountedPrice = ((disPrice)=> {

    console.log(disPrice)

} )

calculateDiscountedPrice(100, 10, showDiscountedPrice )