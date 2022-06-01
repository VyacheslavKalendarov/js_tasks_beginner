/*
Автомобиль выехал из Москвы в Рязань. Напишите программу, которая вычисляет сумеет ли добраться автомобиль до Рязани
за два часа с заданной пользователем средней скоростью движения. Программа должна выводить вычисленное расстояние,
а если автомобиль сумеет добраться до Рязани, - сообщение “Вы приехали”. Расстояние между городами - 200 км.
Обеспечте контроль ввода.
*/

// t = 2ч

const rl = require('readline-sync');

function travelTime(speed){
    return 200 / speed
}

let progress;
countinueInput = true;

while (countinueInput){
    answer = rl.question('Enter average speed: ');
    speed = Number(answer);
    progress = travelTime(speed);
    if (progress > 2) {
        console.log('car on the way')
    } else {
        console.log('Вы приехали.')
    }
    answerForContinue = rl.question('enter display option: any number - for continue, 0 - for end: ');
    if (answerForContinue == 0) countinueInput = false;
}


