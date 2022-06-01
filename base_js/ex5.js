/* Напишите программу, которая вводит число из пяти цифр, разделяет число на отдельные цифры и
печатает их отдельно друг от друга с табуляцией между ними. Например если пользователь вводит
в программу 42339 то должно быть напечатано:
4	2	3	3	9
*/

const readline = require('readline-sync');

let answer = readline.question('enter a number of 5 digits:\n');
let num = Number(answer);

isNaN(num) || num === null ? console.log('Invalid input') : console.log(`${Math.floor(num / 10000) % 10}\t${Math.floor(num / 1000) % 10}\t${Math.floor(num / 100) % 10}\t${Math.floor(num / 10) % 10}\t${num % 10}`)

