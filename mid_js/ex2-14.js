/*
Наибольший общий делитель (НОД) двух целых чисел х и у — это
наибольшее целое, на которое без остатка делится каждое из двух
чисел. Напишите рекурсивную функцию nod, которая возвращает
наибольший общий делитель чисел х и у. НОД для х и у определяется
рекурсивно следующим образом: если у равно О, то nod(x, у)
возвращает х; в противном случае nod(x, у) равняется nod(y, х % у),
где % — это операция вычисления остатка.
*/


let gcd = function (x, y) {
    if (!y) {
        return x;
    }
    return gcd(y, x % y);
};
console.log(gcd(336, 360));