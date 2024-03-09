/* TASK 1.1 */
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';

for(let i = 0; i !=  friends.length; i++){
    if(i  === friends.length -1){
        string += friends[i]
        
    }else{
        string += friends[i] + ", "
        
    }
}
console.log(string)

/* TASK 1.2 */
string = ""

string = friends.join()
console.log(string)


/* TASK 2 */

const cards = [
    
    "Карточка-1",
    "Карточка-2",
    "Карточка-3",
    "Карточка-4",
    "Карточка-5"
]
const cardToRemove = "Карточка-3";
cards.splice(cards.indexOf(cardToRemove),1)
console.log(cards)
/* TASK 3 */
const cardToInsert = "Карточка-6";
/* cards.push(cardToInsert)
 */cards.splice(4,1,cardToInsert)
console.log(cards)
/* TASK 4 */
const cardToUpdate = "Карточка-4";
cards.splice(3,1,cardToUpdate)
console.log(cards)

