/* Напишите программу, которая считывает пять целых чисел,
определяет наибольшее и наименьшее из них. */

const readline = require('readline-sync');

let answer = readline.question('Enter the first number:\n');
const fistNumber = Number(answer);

answer = readline.question('Enter the second number:\n');
const secondNumber = Number(answer);

answer = readline.question('Enter the third number:\n');
const thirdNumber = Number(answer);

answer = readline.question('Enter the fourth number:\n');
const fourthNumber = Number(answer);

answer = readline.question('Enter the fifth number:\n');
const fifthNumber = Number(answer);

let max = fistNumber, min = fistNumber;

Number.isNaN(fistNumber) || firstNum === null || Number.isNaN(secondNumber) ||
    Number.isNaN(thirdNumber) || Number.isNaN(fourthNumber) ||
    Number.isNaN(fifthNumber) ? console.log('Invalid input') :
    (
        max = secondNumber > max ? secondNumber : max,
        max = thirdNumber > max ? thirdNumber : max,
        max = fourthNumber > max ? fourthNumber : max,
        max = fifthNumber > max ? fifthNumber : max,
        min = secondNumber < min ? secondNumber : min,
        min = thirdNumber < min ? thirdNumber : min,
        min = fourthNumber < min ? fourthNumber : min,
        min = fifthNumber < min ? fifthNumber : min,
        console.log('Min value is ' + min + '\nMax value is ' + max)
    );









