
import {contarVocales} from './functionsScripts/contarVocales.js';
// ---------

// import {maxNum, calcularMedia} from './functionsScripts/mayorNroMediaArray.js';
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
// const arrayMaxNroA = [0, 1, 1, 2, 3, 5, 81, 13, 21, 34, 55, 89];
// console.log(`Solución-2: Muestra el mayor número de un array.`);
// console.log(`Array ingresado ---> "${arrayMaxNro}"`);
// console.log(`Mayor número ---> ${maxNum(maxNro)}`);
// printSeparador();

// ---------------------------------------------------------------------------------------------------


// Ejercicio-3
// const arrayMedia = [10, 20, 30, 40, 50];
// console.log(`Solución-3: Calcular la media de un array de números.`);
// console.log(`Array ingresado ---> "${arrayMedia}"`);
// console.log(`Valor MEDIO del array ---> ${calcularMedia(arrayMedia)}`);
// printSeparador();


// ---------------------------------------------------------------------------------------------------


// Ejercicio-4
const arrayAInvertirA = [1, 2, 3, 4, 5];
const arrayAInvertirB = ['a', 'b', 'c'];
const arrayAInvertirC = [true, false, true];

console.log(`Solución-4: Invertir los elementos de un array.`);

console.log('---> Ejemplo 1:')
console.log(`Array ingresado ---> "${arrayAInvertirA}"`);
console.log(`Array invertido ---> ${invertirArray(arrayAInvertirA)}`); // Resultado: [5, 4, 3, 2, 1]

console.log('---> Ejemplo 2:')
console.log(`Array ingresado ---> "${arrayAInvertirB}"`);
console.log(`Array invertido ---> ${invertirArray(arrayAInvertirB)}`); // Resultado: ['c', 'b', 'a']

console.log('---> Ejemplo 3:')
console.log(`Array ingresado ---> "${arrayAInvertirC}"`);
console.log(`Array invertido ---> ${invertirArray(arrayAInvertirC)}`); // Resultado: [true, false, true]
printSeparador();


// ---------------------------------------------------------------------------------------------------


// Ejercicio-5
const arrayConDuplicadosA = [1, 2, 2, 3, 3, 4, 4, 4, 5, 5];
const arrayConDuplicadosB = ['a', 'b', 'a', 'c'];
const arrayConDuplicadosC = [true, true, false, false];

console.log(`Solución-5: Eliminar elementos duplicados de un array.`);

console.log('---> Ejemplo 1:')
console.log(`Array ingresado ---> "${arrayConDuplicadosA}"`);
console.log(`Array sin elementos duplicados ---> ${eliminarDuplicados(arrayConDuplicadosA)}`); 
// Resultado: [1, 2, 3, 4, 5]

console.log('---> Ejemplo 2:')
console.log(`Array ingresado ---> "${arrayConDuplicadosB}"`);
console.log(`Array sin elementos duplicados ---> ${eliminarDuplicados(arrayConDuplicadosB)}`);
// Resultado: ['a', 'b', 'c']

console.log('---> Ejemplo 3:')
console.log(`Array ingresado ---> "${arrayConDuplicadosC}"`);
console.log(`Array sin elementos duplicados ---> ${eliminarDuplicados(arrayConDuplicadosC)}`);
// Resultado: [true, false]

printSeparador();


// ---------------------------------------------------------------------------------------------------


// Ejercicio-6
const cadenaPruebaCapitA = 'yo sólo sé que no sé nada';
const cadenaPruebaCapitB = 'la caída de la casa usher';
const cadenaPruebaCapitC = "i'll spit on your grave";

console.log(`Solución-6: Convertir la primera letra de cada palabra en mayúscula.`);

console.log('---> Ejemplo 1:')
console.log(`Oración original ---> "${cadenaPruebaCapitA}"`);
console.log(`Oración con palabras capitalizadas ---> ${capitalizarPalabras(cadenaPruebaCapitA)}`);

console.log('---> Ejemplo 2:')
console.log(`Oración original ---> "${cadenaPruebaCapitB}"`);
console.log(`Oración con palabras capitalizadas ---> ${capitalizarPalabras(cadenaPruebaCapitB)}`);

console.log('---> Ejemplo 3:')
console.log(`Oración original ---> "${cadenaPruebaCapitC}"`);
console.log(`Oración con palabras capitalizadas ---> ${capitalizarPalabras(cadenaPruebaCapitC)}`);

printSeparador();


// ---------------------------------------------------------------------------------------------------


// Ejercicio-7

const cantTermFibonacciA = 5;
const cantTermFibonacciB = 8;
const cantTermFibonacciC = 10;

console.log(`Solución-7: Generar los primeros N números de la sucesión de Fibonacci.`);

console.log('---> Ejemplo 1:')
console.log(`Cant. de Términos requerida ---> ${cantTermFibonacciA}`);
fibonacci(cantTermFibonacciA);

console.log('---> Ejemplo 2:')
console.log(`Cant. de Términos requerida ---> ${cantTermFibonacciB}`);
fibonacci(cantTermFibonacciB);

console.log('---> Ejemplo 3:')
console.log(`Cant. de Términos requerida ---> ${cantTermFibonacciC}`);
fibonacci(cantTermFibonacciC);

printSeparador();