/* Я нашел замечательный гриль (https://market.yandex.ru/offer/gXBC9f3VsTCE8tua_dKwkA/spec), и от каждого до конца недели жду объект, у которого будут свойства этого гриля, с геттерами и сеттерами и методом, который будет жарить стейк в зависимости от выбранного режима. */

const rl = require('readline-sync');

function Product(name, manufacturer, model) {
    this._name = name;
    this._manufacturer = 'Redmond';
    this._model = 'SteakMaster RGM-M813';
    this.mode = function () {
        console.log('Выберите программу для гриля:');
        console.log(this._programms.join('\n'));
    };

    Object.defineProperty(this, 'programms', {
        get() {
            return this._programms;
        },
        configurable: true
    });

    Object.defineProperty(this, 'programms', {
        set(p) {
            if (Array.isArray(p)) {
                this._programms = p;
            } else {
                console.log('Param type is not array!')
            }
        }
    });

}


const programms = [
    'rare',
    'medium rare',
    'medium',
    'medium well',
    'well done'
]

let grill = new Product('гриль');
grill.programms = programms;
console.log(programms)
let answer = rl.question('what roast do you prefer?: ');
switch (answer) {
    case 'RARE':
        console.log('Мясо сырое. от 42 до 46 оС');
        break;
    case 'Medium rare':
        console.log('Сырое мясо. от 46 до 50 оС;');
        break;
    case 'MEDIUM':
        console.log('Мясо средней прожарки. от 52 до 57 оС');
        break;
    case 'Medium Well':
        console.log('Хорошо прожаренное мясо. от 60 до 65 оС;');
        break;
    case 'WELL DONE':
        console.log('Зажаренное мясо. от 65 до 70 оС.');
}