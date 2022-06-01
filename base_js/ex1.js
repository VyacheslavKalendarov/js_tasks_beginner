/*
Напишите программу, которая считывает радиус круга и печатает диаметр круга,
длину окружности и площадь. Используйте значение константы 3.14159 для числа пи.
Формулы:
(диаметр) D = 2R
(длина окружности) L = pi * D
(площадь) S = pi * R * R
*/

const readline = require('readline-sync');
const answer = readline.question('Enter the circle radius:\n');
const r = Number(answer);
const pi = 3.14159;

!isNaN(r) && r > 0 ? console.log(`Diameter = ${2 * r}\nCircle length = ${pi * 2 * r}\nCircle area = ${pi * r * r}`) :
    console.log('Invalid input');










