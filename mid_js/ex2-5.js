/*
Вы покупаете 3 товара в магазине. Если сумма вашего чека превышает 10 000 руб, вам будет сделана скидка 10%.
Напишите программу которая запрашивает 3 стоимости товара и вычисляет сумму чека.
Обеспечте контроль ввода.
*/

const rl = require('readline-sync');

function totalSum(product1, product2, product3) {
    let sum = product1 + product2 + product3;
    return sum > 10_000 ? 'Вам будет сделана скидка 10%, сумма составит: ' + (sum - sum * 0.1) : sum;
}

countinueInput = true;

while (countinueInput) {
    answer = rl.question('Enter product1 price: ');
    product1 = Number(answer);
    answer = rl.question('Enter product2 price: ');
    product2 = Number(answer);
    answer = rl.question('Enter product3 price: ');
    product3 = Number(answer);
    console.log(totalSum(product1, product2, product3));
    answerForContinue = rl.question('enter display option: any number - for continue, 0 - for end: ');
    if (answerForContinue == 0) countinueInput = false;
}

console.log('Программа завершена.')


