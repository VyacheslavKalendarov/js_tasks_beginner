/* Напишите программу, которая считывает целое число, определяет четное оно или нечетное.
(Используйте операцию вычисления остатка от деления. Четное число кратно двум.
Любое число кратное двум при делении на 2 дает в остатке 0). */

const readline = require('readline-sync');

const answer = readline.question('Enter the integer number:\n');
const num = Number(answer);

isNaN(num) || num === null ? console.log('Invalid input') :
    num % 2 === 0 ? console.log('Number is even') : console.log('Number is not even');

