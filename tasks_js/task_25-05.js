/* Я нашел замечательный гриль (https://market.yandex.ru/offer/gXBC9f3VsTCE8tua_dKwkA/spec), и от каждого до конца недели жду объект, у которого будут свойства этого гриля, с геттерами и сеттерами и методом, который будет жарить стейк в зависимости от выбранного режима. */

const rl = require('readline-sync');

// Используешь как входные параметры manufacturer и model, но в итоге их не используешь в функции
function Product(name, manufacturer, model) {
    // Если ты используешь функцию-конструктор, нет смысла объявлять параметры через _ 
    this.name = name; // Здесь будет this.name = name;  
    this.manufacturer = manufacturer;  // Здесь будет this.manufacturer = manufacturer
    this.model = model; // здесь соответственно this.model = model
    // Делай логические отступы, если у тебя идут сначала параметры, потом методы, логично их отделить
    this._programms = [
        'rare',
        'medium rare',
        'medium',
        'medium well',
        'well done'
    ];

    this.mode = function () {
        console.log('Выберите программу для гриля:');
        console.log(this._programms.join('\n')); // Здесь у тебя даже линтер должен ругаться что что-то идёт не так с _programms
    };

    Object.defineProperty(this, 'programms', {
        get: function () {
            return this._programms;
        },
        set: function (p) {
            if (Array.isArray(p)) {
                this._programms = p;
            } else {
                console.log('Param type is not array!');
            }
        },
        configurable: true,
    });

    Object.defineProperty(this, 'programms', {
        set: function (p) {
            if (Array.isArray(p)) {
                this._programms = p;
            } else {
                console.log('Param type is not array!');
            }
        },
        configurable: true,
    });



}

const newProgramms = ['2'];


let grill = new Product('гриль');
grill.programms = newProgramms;

console.log(grill);

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