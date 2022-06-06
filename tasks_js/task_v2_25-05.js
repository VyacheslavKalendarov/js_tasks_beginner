/* Я нашел замечательный гриль (https://market.yandex.ru/offer/gXBC9f3VsTCE8tua_dKwkA/spec), и от каждого до конца недели жду объект, у которого будут свойства этого гриля, с геттерами и сеттерами и методом, который будет жарить стейк в зависимости от выбранного режима. */


let product = {
    name: 'grill',
    manufacturer: 'REDMON',
    model: 'SteakMaster RGM-M813',
    'Maximum temperature': 200,
    power: 2000,
    сontrol: 'electro',
    'peculiar properties': [
        'non-stick coating',
        'fat collection tray',
        'top panel height adjustment',
        'lattice',
        'съемные пластины'
    ],
    'Additional functions': [
        'automatic shutdown',
        'overheat protection',
        'temperature control'
    ],
    mode: [
        
    ],

    get roast() {
        return `Мясо начало готовиться, выбранная прожарка ${this.mode}`
    },

    set meatTemp(value) {
        if (42 <= value && value <= 46) {
            this.mode = 'Rare'
        } else if (47 <= value && value <= 50) {
            this.mode = 'Medium rare'
        } else if (51 <= value && value <= 57) {
            this.mode = 'Medium'
        } else if (58 <= value && value <= 65) {
            this.mode = 'Medium Well'
        } else if (66 <= value && value <= 70) {
            this.mode = 'WELL DONE'
        }

    }


};

product.meatTemp = 70
console.log(product.roast)
