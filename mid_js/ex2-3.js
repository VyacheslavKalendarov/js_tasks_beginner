/*
Наибольший общий делитель двух целых чисел — это наибольшее
целое, на которое без остатка делится каждое из двух чисел. Напишите
функцию getGCD, которая возвращает наибольший общий делитель
двух целых чисел.
*/

function getGCD(firstNumber, secondNumber) {
    if (firstNumber > secondNumber && firstNumber % secondNumber === 0) {
        return secondNumber;
    } else if (firstNumber < secondNumber && secondNumber % firstNumber === 0) {
        return firstNumber;
    } else {
        let gcd = firstNumber > secondNumber ? secondNumber : firstNumber;
        for (let counter = 0; firstNumber % gcd > 0 || secondNumber % gcd > 0; counter++) {
            gcd = firstNumber > secondNumber ? Math.floor(secondNumber / 2) - counter :
                Math.floor(firstNumber / 2) - counter;
        }
        return gcd;
    }
}

const rl = require('readline-sync');
let answer = rl.question('Enter the first number:\n');
let first = Number(answer);
while (isNaN(first) || first === null) {
    console.log('Invalid input');
    answer = rl.question('Enter the first number:\n');
    first = Number(answer);
}

answer = rl.question('Enter the second number:\n');
let second = Number(answer);
while (isNaN(second) || second === null) {
    console.log('Invalid input');
    answer = rl.question('Enter the second number:\n');
    second = Number(answer);
}

console.log('GCD:', getGCD(first, second));