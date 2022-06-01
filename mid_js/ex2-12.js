/*
Напишите программу, которая играет в игру «Угадай число» следующим
образом: ваша программа выбирает случайное число, которое
должно быть отгадано, в диапазоне от 1 до 1000. Затем программа
печатает:
Мое число между 1 и 1000.
Вы можете его отгадать?
Пожалуйста, напечатайте вашу первую догадку.
Затем игрок печатает свою первую догадку. Программа отвечает
одним из следующих вариантов:
1. Отлично! Вы отгадали число!
Хотели бы вы сыграть еще pas (д или н)?
2. Слишком мало. Попытайтесь снова.
3. Слишком много.Попытайтесь снова.

Если догадка игрока неверна, ваша программа должна работать циклически
до получения верного ответа. Программа должна говорить
игроку Слишком мало или Слишком много, чтобы помочь ему угадать
правильный ответ. Замечание: Техника поиска, используемая
в этой задаче, называется двоичный поиск. Об этом мы подробнее
поговорим в следующей задаче.
*/

const rl = require('readline-sync');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

secretNum = getRandomInt(1, 1001);
console.log(secretNum)

answer = rl.question('My number is between 1 and 1000. Can you guess it? Please type in your first guess.\nEnter your number: ')
num = Number(answer);

countinueInput = true;

while (countinueInput) {
    if (num == secretNum) {
        console.log('Вы угадали');
        countinueInput = false
    } else if (num > secretNum) {
        answer = rl.question('Too much.\ntry again: ')
        num = Number(answer);
    } else if (num < secretNum) {
        answer = rl.question('too little.\ntry again: ')
        num = Number(answer);
    } 
}