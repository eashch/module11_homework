/*
    Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
    Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
    При выполнении задания необходимо учесть, что массив может содержать не только числа, 
    но и знаки, например null и так далее.

    На этот раз оформите решение в виде функции: постарайтесь дать 
    этой функции корректное название, вызовите функцию, 
    проанализируйте синтаксис.
*/

let inputArray = [1, 1, 1, 0, 1.0000001, 2, 123, null, undefined, NaN, 
                    Infinity, -Infinity, [1, 2], {}, BigInt(1)];

function countAndPrintOddsEvensAndZeros(inputArray) {
    let oddCount = 0;
    let evenCount = 0;
    let zeroCount = 0;
    let precission = 0.000000001;

    inputArray.forEach(item => {
        if (typeof item !== "number" 
                || Math.abs(Math.round(item) - item) > precission
                || Number.isNaN(item)
                || !Number.isFinite(item))
            return;
        if (item === 0)
            zeroCount++;
        else 
            item % 2 == 0 ? evenCount++ : oddCount++;
    });

    console.log(`Array has: \n   zeros: ${zeroCount} \n   odds: ${oddCount} \n   evens: ${evenCount}`);
}

countAndPrintOddsEvensAndZeros(inputArray);