/*
Напишите программу, которая вычисляет квадрат и куб чисел от 0 до 10 и использует табуляцию
для печати таблицы:

число   квадрат куб
0	    0	    0
1	    1	    1
2	    4	    8
3	    9	    27
4	    16	    64
5	    25	    125
6	    36	    216
7	    49	    343
8	    64	    512
9	    81	    729
10	    100	    1000
*/

console.log(`
    число \t квадрат \t куб\n
    0 \t\t ${Math.pow(0, 2)} \t\t ${Math.pow(0, 3)}\n
    1 \t\t ${Math.pow(1, 2)} \t\t ${Math.pow(1, 3)}\n
    2 \t\t ${Math.pow(2, 2)} \t\t ${Math.pow(2, 3)}\n
    3 \t\t ${Math.pow(3, 2)} \t\t ${Math.pow(3, 3)}\n
    4 \t\t ${Math.pow(4, 2)} \t\t ${Math.pow(4, 3)}\n
    5 \t\t ${Math.pow(5, 2)} \t\t ${Math.pow(5, 3)}\n
    6 \t\t ${Math.pow(6, 2)} \t\t ${Math.pow(6, 3)}\n
    7 \t\t ${Math.pow(7, 2)} \t\t ${Math.pow(7, 3)}\n
    8 \t\t ${Math.pow(8, 2)} \t\t ${Math.pow(8, 3)}\n
    9 \t\t ${Math.pow(9, 2)} \t\t ${Math.pow(9, 3)}\n
    10 \t\t ${Math.pow(10, 2)} \t\t ${Math.pow(10, 3)}\n    
`)