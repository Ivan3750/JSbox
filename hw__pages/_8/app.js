/* Вивести на екран всі числа від 1 до 10 за допомогою циклу while.
Вивести на екран всі парні числа від 2 до 20 за допомогою циклу for. Якщо число не парне, пропустити його за допомогою continue.
Вивести на екран таблицю множення числа 7 за допомогою циклу for.
Створити масив з числами від 1 до 5. Вивести на екран кожен елемент масиву за допомогою циклу while.
Створити масив із числами від 1 до 10. За допомогою циклу for пройтися по масиву та вивести на екран всі числа, крім числа 7. Якщо зустрінете число 7, закінчити виконання циклу за допомогою оператора break.
Створити скрипт, який виводить на екран всі числа, які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.
За допомогою циклу while вивести на екран всі числа від 1 до 20, крім чисел, кратних 3. Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.


 */

let a = 0
while(a<10){
    a++
    console.log(a)
}
for(let i = 2;i != 21;i++){
    if(i%2 == 0){
        console.log(i)
    }else{
        continue
    }

}
let seven = 0;
for(let i = 0;i != 11;i++){
    seven = i*7
    console.log(seven)

}
let array = [1,2,3,4,5]
let Bigarray = [1,2,3,4,5,6,7,8,9,10]

let x = 0
while(x!=5){
    console.log(array[x])
    x++

}
let y = 0
while(y!=10){
    if(y == 7){
        break;
    }
    console.log(Bigarray[y])
    y++

}

let z = prompt("Введіть число")


while(z != 0){
    z--
    console.log(z)
}

let h = 0;

while(h != 21){
    h++
    if (h % 3 === 0){
        continue
    }else{
        console.log(h)
    }
}