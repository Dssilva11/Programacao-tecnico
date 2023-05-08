"use strict";
function positivoslista(numeros) {
    const positivos = [];
    numeros.forEach((number) => {
        if (number > 0) {
            positivos.push(number);
        }
    });
    return positivos;
}
const numeros = [3, 7, 2, -4, 9, -1, -2];
const positivos = positivoslista(numeros);
console.log(positivos);
