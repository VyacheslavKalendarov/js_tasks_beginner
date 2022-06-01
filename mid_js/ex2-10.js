/*
В старину, когда даже в столице билеты в общественном транспорте выдавали контролеры, существовало поверье:
если на билете сумма первых трех цифр в номере билета равна сумме последних трех, то это к удаче.
Напишите программу, которая получала бы на входе шестизначный номер билета и выводила, счастливый ли это билет или нет.
К примеру, билеты 666 666 и 252 135 - счастливые, а 123 456 - нет.
Обеспечте контроль ввода на длину вводимого числа.
За процесс опеределения "счастливости" билета должна отвечать функция с циклом.
*/

const rl = require('readline-sync');

function isLucky(num) {
    let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
    let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);

    return sum1 == sum2;
}


countinueInput = true;

while (countinueInput) {
    answer = rl.question('enter a six-digit number: ');
    if (answer.length == 6) countinueInput = false;
}


console.log(isLucky(answer));
