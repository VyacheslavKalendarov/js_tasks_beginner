/*
Напишите программу-календарь. Она должна проверять введенный номер дня и сообщать, выходной этот день или рабочий.
Месяц может начинаться с любого дня недели. Для этого вводится число — номер дня недели,
с которого начинается месяц. Убедитесь, что введенное число корректно.
*/

const rl = require('readline-sync');
let answer = rl.question('Enter the number of the day in month, to check if it is a weekend:\n');
let day = Number(answer);
while (isNaN(day) || day === null || day < 1 || day > 31) {
    console.log('Invalid input');
    answer = rl.question('Enter the number of the day in month, to check if it is a weekend:\n');
    day = Number(answer);
}

answer = rl.question('Enter the number of the day in the week, from which the month starts:\n');
let start = Number(answer);
while (isNaN(start) || start === null || start < 1 || start > 7) {
    console.log('Invalid input');
    answer = rl.question('Enter the number of the day in the week, from which the month starts:\n');
    start = Number(answer);
}
start--;
(day + start - 6) % 7 === 0 || (day + start) % 7 === 0 ? console.log('Weekend\n') : console.log('Working day\n');

