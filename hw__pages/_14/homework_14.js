/* TASK 1 */
const user = {
    hobby: "none", 
    premium: true
 }
 user.mood = "happy"
 console.log(user)
 user.hoppy = "skydiving"
 user.premium = false
 for(const key in user){
    console.log(key +  ":" + user[key])
 }

 /* TASK 2 */ 
const a = {
    a: 0, 
    b: 0
 }
 function countProps(obj){
    alert(Object.keys(a).length)
 }
 countProps(a)


 /* TASK 4 */
 const employees = {
    Peter: 10, 
    Alex: 15,
    Ivan: 44
 }
 function findBestEmployee(employees){
    let a = 0
    for(const key in employees){
        a = Math.max(employees[key],a)
    }
    console.log(a)
}


findBestEmployee(employees)


/* TASK 5 */




const objects = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 40 }
];


 function getAllPropValues(arr, prop) {
    if (arr.length === 0) {
      return []
    }
    const propValues = arr.map(obj => obj[prop])
  
    return propValues
}

const propertyValues = getAllPropValues(objects, 'name')
console.log(propertyValues)
  


 /* TASK 6 */





  function calculateTotalPrice(allProducts, productName) {
    const product = allProducts.find(obj => obj.name === productName)

    const totalPrice = product.price * product.quantity
    return totalPrice
  }
  
  // Приклад використання:
  const products = [
    { name: 'Laptop', price: 1000, quantity: 2 },
    { name: 'Phone', price: 500, quantity: 3 },
    { name: 'Tablet', price: 300, quantity: 4 }
  ]
  
  const totalPrice = calculateTotalPrice(products, 'Phone')
  console.log(totalPrice)
  