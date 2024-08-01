/* TASK 1 */

const logitems = function(array){
    for(const item of array){
        console.log(`${array.indexOf(item)} -   ${item}`);

    }
}
logitems(['Mango', 'Poly', 'Ajax'])


/* TASK 2 */

function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(' ');
    const wordCount = words.length;
    const totalPrice = wordCount * pricePerWord;
  
    return totalPrice;
  }
  const engravingPrice = calculateEngravingPrice("Lorem ipsum dolor sit amet", 10);
console.log("Вартість гравіювання:", engravingPrice);




/* TASK 3 */


const formatString = function(string) {
    if (string.length > 40) {
        string = string.slice(0, 40) + "..."
        console.log(string)
    }else{
        console.log(string)
    }
}

formatString("sdfnjds sdi jfsidjf sjdf isdjif jsdjf asknknkl")


/* TASK 5 */
checkForSpam = function(message){
    if(message.includes("spam") || message.includes("sale") ){
        return true;
    }else{
        return false;
    }
}

console.log(checkForSpam("sale for today"))


/* TASK 6 */


let input;
const numbers = [];
let total = 0;  




function getNumberFromUser() {
  const userInput = prompt("Введіть число:");
  if (userInput !== null && !isNaN(userInput)) {
    const number = parseFloat(userInput);
    numbers.push(number);
    getNumberFromUser();
  } else {
    for(i=0 ; i<numbers.length ; i++){
        total += numbers[i]
     }
    alert("Сума: " + total );
  }
}
getNumberFromUser();

