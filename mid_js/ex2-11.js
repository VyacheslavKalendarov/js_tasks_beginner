/*
Напишите функцию, которая воспринимает целое значение и возвращает
число с обратным порядком цифр. Например, воспринимается
число 7631, а возвращается число 1367.
*/

const rl = require('readline-sync');

function countdown(num) {
   let a, category, temp = num, sum = 0;
   
   // Считаем количество разрядов введенного числа
   for (category = 1; temp > 10; category *= 10) {
      temp = temp / 10;
   }

   while (num > 0) {
      a = parseInt(num % 10);
      num = num / 10;
      sum += a * category;
      category /= 10;
   }

   return parseInt(sum)
}

answer = rl.question('enter an integer value:');
let num = Number(answer);

console.log(countdown(num))