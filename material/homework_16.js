
const user = [
    { id: 1, name: 'John', age: 25 , eyeColor: "blue", gender: "male", isActive: true, email: "John4533@gmymail.com"},
    { id: 2, name: 'Jane', age: 30, eyeColor: "brun", gender: "female", isActive: true, email: "Jane1503@gmymail.com"},
    { id: 3, name: 'Peter', age: 15, eyeColor: "brun", gender: "male", isActive: false, email: "Peter0085@gmymail.com" },
    { id: 4, name: 'Anna', age: 28,  eyeColor: "green" ,gender: "female", isActive: false, email: "Anna5085@gmymail.com"}
]







/* TASK 1 */
user.forEach(function(element){
    console.log(element.name)
})
/* TASK 2*/


user.forEach((element)=>{
    console.log(element.eyeColor)
})

/* TASK 3 */

user.map((element)=>{
    console.log(element.gender)
})


/* TASK 4 */

console.log(user.filter(element => element.isActive))

/* TASK 5 */

let inputEmail = prompt("Ведіть пошту:")
let checkEmail =  user.find((element)=>{
    
        return element.email === inputEmail
    
})

if(checkEmail){
    console.log(checkEmail.name)
}

/* TASK 6 */



const isAdult = user.filter(function(element){
    return element.age >= 18
})

console.log(isAdult)