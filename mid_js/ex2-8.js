/*
Напишите программу-дразнилку “Купи слона”. Она спрашивает у пользователя, как его зовут, затем отвечает “%username%, купи слона!”.
Дальше, что бы он ни говорил, она передразнивает: Все говорят “...”, а ты купи слона!
Так повторяется бесконечно. Для ответа пользователю создайте и исопльзуйте функцию elephantAnswer.

Пример
- Хорошо, давай куплю.
- Все говорят “Хорошо, давай куплю.”, а ты купи слона!
*/

const rl = require('readline-sync');

function elephantAnswer(username){
    console.log(`${username}, купи слона!`);
    answer = rl.question('');
    while (true) {
        return `Все говорят ${answer}, а ты купи слона!`
    }
}

username = rl.question('enter your name: ');
console.log(elephantAnswer(username))