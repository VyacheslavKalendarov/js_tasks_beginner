/* Напишите программу, которая считывает два числа, определяет и печатает является ли
первое число кратным второму. Кратными называют числа, которые можно поделить на заданное число нацело. */


const readline = require('readline-sync');

let answer = readline.question('Enter the first number:\n');
const fistNumber = Number(answer);

answer = readline.question('Enter the second number:\n');
const secondNumber = Number(answer);

isNaN(fistNumber) || fistNumber === null || isNaN(secondNumber) || secondNumber === 0 || secondNumber === null ? console.log('Invalid input') :
    fistNumber % secondNumber === 0 ? console.log('Первое число кратно второму') : console.log('Первое число не кратно второму');
