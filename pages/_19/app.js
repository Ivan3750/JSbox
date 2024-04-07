
/* TASK 1 */

const categories = document.querySelectorAll('.categories');
const titleCategories = document.querySelectorAll('.title');

categories.forEach((element,index)=>{
    let title = titleCategories[index].textContent 
console.log(`Категорія: ${title}
Кількість елементів: ${JSON.stringify(element.querySelectorAll("li").length)}`)
    console.log()
})

/* TASK 2 */

const ingredientsList = document.querySelector('#ingredients');

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];


for(let i = 0; i!= ingredients.length; i++ ){
    let item = document.createElement('li');
    item.textContent=ingredients[i]
    ingredientsList.appendChild(item)
}


/* TASK 3 */




 const gallery = document.querySelector('#gallery');






const images = [
    {
     url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'White and Black Long Fur Cat',
    },
    {
     url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
     url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Group of Horses Running',
    },
   ];
   


   
images.forEach((element)=>{
    console.log(element)
    let li = document.createElement("li")
    let img = document.createElement("img")
    gallery.append(li)
    img.src= element.url
    img.alt = element.alt
    img.style.height = "200px"
    li.append(img)
    console.log(img.src= element.url)
    
})


/* TASK 4 */


let value = document.querySelector("#value")

counterValue = 0

document.querySelector('[data-action = "decrement"]').addEventListener("click",()=>{
    counterValue--
    value.innerHTML = counterValue
})
document.querySelector('[data-action = "increment"]').addEventListener("click",()=>{
    counterValue++
    value.innerHTML = counterValue
})

