
import {contarVocales} from './functionsScripts/contarVocales.js';
// ---------

import {maxNum, calcularMedia} from './functionsScripts/mayorNroMediaArray.js';
// ---------

import {invertirArray, eliminarDuplicados} from './functionsScripts/invertElemElimDuplic.js';
// ---------

import {capitalizarPalabras} from './functionsScripts/capitPalab.js';
// ---------

import {fibonacci} from './functionsScripts/sucesFibonacci.js';
// ---------------------------------------------------------------------------------------------------


function printSeparador() {
    console.log(' ');
    console.log(`//////////////////////////////////////////////////////////`);
    console.log(' ');
}


// ---------------------------------------------------------------------------------------------------

// Ejercicio-1
const stringVowels = 'ecuación';
console.log(`Solución-1: Contar vocales en una cadena.`);
console.log(`Cadena ingresada ---> "${stringVowels}"`);
console.log(`Cantidad de vocales ---> ${contarVocales(stringVowels)}`);
printSeparador();


// ---------------------------------------------------------------------------------------------------


// Ejercicio-2
const arrayMaxNro = [0, 1, 1, 2, 3, 5, 81, 13, 21, 34, 55, 89]
console.log(`Solución-2: Muestra el mayor número de un array.`);
console.log(`Array ingresado ---> "${arrayMaxNro}"`);
console.log(`Mayor número ---> ${maxNum(maxNro)}`);
printSeparador();

// ---------------------------------------------------------------------------------------------------


// Ejercicio-3
const arrayMedia = [10, 20, 30, 40, 50];
console.log(`Solución-3: Calcular la media de un array de números.`);
console.log(`Array ingresado ---> "${arrayMedia}"`);
console.log(`Valor MEDIO del array ---> ${calcularMedia(arrayMedia)}`);
printSeparador();


// ---------------------------------------------------------------------------------------------------


// Ejercicio-4
const arrayAInvertir = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`Solución-4: Invertir los elementos de un array.`);
console.log(`Array ingresado ---> "${arrayAInvertir}"`);
console.log(`Array invertido ---> ${invertirArray(arrayInvertido)}`);
printSeparador();

// ---------------------------------------------------------------------------------------------------


// Ejercicio-5
const arrayConDuplicados = [1, 2, 2, 3, 4, 4, 4, 5, 5, 6, 6, 6, 6, 7, 8, 9, 10, 10, 10];
console.log(`Solución-5: Eliminar elementos duplicados de un array.`);
console.log(`Array ingresado ---> "${arrayConDuplicados}"`);
console.log(`Array sin elementos duplicados ---> ${eliminarDuplicados(arraySinDuplicados)}`);
printSeparador();


// ---------------------------------------------------------------------------------------------------


// Ejercicio-6
const cadenaPruebaCapit = 'yo sólo sé que no sé nada';
console.log(`Solución-6: Convertir la primera letra de cada palabra en mayúscula.`);
console.log(`Oración original ---> "${cadenaPruebaCapit}"`);
console.log(`Oración con palabras capitalizadas ---> ${capitalizarPalabras(cadenaPruebaCapit)}`);


// ---------------------------------------------------------------------------------------------------


// Ejercicio-7

const cantTermFibonacci = 10;
console.log(`Solución-7: Generar los primeros N números de la sucesión de Fibonacci.`);
console.log(`Cant. de Términos requerida ---> ${cantTermFibonacci}`);
console.log(fibonacci(cantTermFibonacci));
printSeparador();