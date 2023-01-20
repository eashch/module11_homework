/*
    Напишите функцию, которая принимает число 
    как аргумент и возвращает функцию, 
    которая также принимает число как аргумент 
    и возвращает сумму этих двух чисел. 
    Выведите в консоль результат.
*/


let sumOfTwoNumbers = function (firstNumber) {
    return function (secondNumber) {
        return firstNumber + secondNumber;
    }
}

let firstNumber = 238;
let secondNumber = 2;
console.log (`${firstNumber} + ${secondNumber} = ${sumOfTwoNumbers(firstNumber)(secondNumber)}`);