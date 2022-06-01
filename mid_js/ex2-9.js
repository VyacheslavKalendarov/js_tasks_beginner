/*
У бухгалтера сломались счеты. Напишите программу, которая считала бы сумму вводимых чисел. В начале у бухгалтера спрашивают,
сколько чисел тот хочет сложить, затем нужное количество раз просят ввести число и в конце выводят получившуюся сумму.
*/

const rl = require('readline-sync');

answer = rl.question('How many numbers do you need to add?: ');
amount = Number(answer);
let result = 0;

function sum(amount) {
    for (let i = 1; amount >= i; i++) {
        answer = rl.question('enter ' + i + ' number: ');
        num = Number(answer)
        result += num
    }
    return result
}

console.log(sum(amount))