/* Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
Створити масив із трьох рядків. Додати до масиву ще одну рядків.
Створити скрипт який поверне суму всіх чисел в масиві.
Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.
Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран. */


/* TASK 1 */
let Array = [1,2,3]
Array[1] = 10
console.log(Array)
/* TASK 2 */
let ArrayStr = ["word", "two", "IT"]
ArrayStr.push("add")
console.log(ArrayStr)
/* TASK 3 */
let ArraySum = 0;
for(let i = 0; i != Array.length; i++){
    ArraySum +=  Array[i];
}
console.log(ArraySum)
/* TASK 4 */
let BigArray = [1,2,3,4,5]; 
for(let i = 0; i != BigArray.length; i++){
    console.log(BigArray[i])
}

/* TASK 5 */

let StrArray = ["JavaScript", "HTML", "CSS", "JAVA", "PYTHON"]
for (let i=0 ; i < StrArray.length; i++ ) {
     if (StrArray[i].length > 5) {
        console.log(StrArray[i]);
     }
}

/* TASK  6*/
BigArray = [1,2,3,4,5,6,7,8,9,10];
console.log(BigArray)
let Num = 0;
for (let j=0;j!=BigArray.length;j++) {
    if(BigArray[j] > Num){
        Num = BigArray[j];
    }
}
console.log(Num)
/* TASK 7 */
for (let j=0;j!=BigArray.length;j++) {
    if(BigArray[j] % 2 == 0 ){
        console.log(BigArray[j])
    }
}
