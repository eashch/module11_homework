/*
    Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить числа в интервале от первого 
    до второго принятого числа. Используйте setInterval.

    Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, 
    начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).
*/

function printNumbersInInterval (startNumber, finishNumber) {
    let startVal = Math.min(startNumber, finishNumber);
    let endVal = Math.max(startNumber, finishNumber);
    let counter = setInterval(() => {
        if (startVal > endVal) {
            clearInterval(counter);
            return;
        }
        console.log(startVal++);
    }, 1000);
}

printNumbersInInterval(5, 15);