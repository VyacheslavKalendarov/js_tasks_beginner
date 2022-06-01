/*
За стоянку до трех часов парковочный гараж запрашивает плату минимум
$2.00. В случае стоянки более трех часов гараж дополнительно
запрашивает $0.50 за каждый полный или неполный час сверх трех
часов. Максимальная плата за сутки составляет $10.00. Допустим,
что никто не паркуется более, чем на сутки за раз. Напишите программу
расчета и печати оплаты за парковку для клиентов, которые парковали свои автомобили вчера в этом гараже.
Запросите ввод у пользователя, у пользователя должна быть возможность 
вводить часы клиентов без ограничений, если нужно посчитать 10 клиентов -
то можно ввести 10, если 20 - то 20. Если пользователь вводит 0 это
должно быть сигналом того, что он завершил ввод и можно начать расчеты.
Вы должны вводить длительнось парковки для каждого клиента. Ваша
программа должна печатать результаты в аккуратном табулированном
формате и должна рассчитывать и печатать общий вчерашний доход.
Программа должна использовать функцию calculateCharges, чтобы определять
плату для каждого клиента. Результаты работы должны представляться
в следующем формате:
Автомобиль  Часы    Плата
N           1.5     2

Итого       29.5    14.5
*/

function calculateCharges(hours) {
    if (hours > 3) {
        let result = 2 + (hours - 3) * .5;
        return result > 10 ? 10 : result;
    } else return 2;
}

const rl = require('readline-sync');
let answer, counter = 1, hours;
let countinueInput = true;
let hoursResult = 0;
let chargesResult = 0;

while (countinueInput) {
    answer = rl.question('Enter parking hours of car' + counter + ':\n(to calculate totals press 0)\n');
    hours = Number(answer);
    if (isNaN(hours) || hours === null || hours < 0 || hours > 24) {
        console.log('Invalid input\n');
    } else if (hours === 0) {
        countinueInput = false;
    } else {
        console.log('Car\tHours\tCharges');
        hoursResult += hours;
        console.log(counter, '\t', hours, '\t', calculateCharges(hours));
        chargesResult += calculateCharges(hours);
        counter++;
    }
}

console.log('Total:\t', hoursResult, '\t', chargesResult);
