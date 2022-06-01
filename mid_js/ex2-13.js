/*
Напишите программу, которая играет в игру «Угадай число» следующим
образом: пользователь выбирает случайное число, которое
должно быть отгадано, в диапазоне от 1 до 100. Затем программа
начинает отгадывать число пользователя, выводя свои догадки в консоль.
Вместе с числом выводите пользователю варианты выбора:
1 - загаданное число больше текущего
2 - загаданное число меньше текущего
3 - вы угадали!
Дайте возможность пользователю играть до тех пор, пока ему не надоест.
*/

const rl = require('readline-sync');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}



countinueInput = true;
let min = 1, max = 101;

while (countinueInput) {
    progAnswer = getRandomInt(min, max);
    console.log(progAnswer);
    userAnswer = rl.question('1 - the hidden number is greater than the current one?\n2 - the hidden number is less than the current one?\n3 - you guessed it!\nEnter any character to end\nenter here: ');
    if (userAnswer == 1) {
        min = progAnswer
    } else if (userAnswer == 2) {
        max = progAnswer
    } else if (userAnswer == 3) {
        console.log('Вы угадали');
        countinueInput = false;
    } else {
        countinueInput = false;
    }
}

console.log('Программа завершена!')