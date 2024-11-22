/* 4. Invertir los elementos de un array
Escribe una función que reciba un array y devuelva el mismo array, pero con los elementos invertidos. */

function invertirArray(arrayParam) {
    let arrayInvertido = [...arrayParam].reverse();

    return arrayInvertido;
}

console.log("Solución 4: Invertir Array");
console.log(invertirArray([1, 2, 3, 4, 5])); // Resultado: [5, 4, 3, 2, 1]
console.log(invertirArray(['a', 'b', 'c'])); // Resultado: ['c', 'b', 'a']
console.log(invertirArray([true, false, true])); // Resultado: [true, false, true]
console.log("///////////////");


/*
Soluión 4: Invertir Array
Dado que se pide mostrar el mismo array que se ingresa pero con sus elementos dispuestos en orden inverso, recurrimos al método 'spread' de JavaScript para generar una copia independiente del arreglo ingresado, ya que, de lo contrario y por naturaleza de JavaScript, con sólo un cambio de nombre de la variable que almacena el arreglo no bastaría para diferenciar al nuevo arreglo con los elementos invertidos, ya que el método 'reverse()' se aplicaría igualmente al arreglo original independientemente del cambio de nombre. */




/* 5. Eliminar elementos duplicados de un array
Escribe una función que reciba un array y elimine los elementos duplicados, devolviendo un nuevo array.*/

function eliminarDuplicados(arrayConDuplicados) {
    let setArraySinDuplicados = new Set (arrayConDuplicados);
    let arraySinDuplicados = [... setArraySinDuplicados];

return arraySinDuplicados;
}

console.log("Solución 5: Eliminar Duplicados");
console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5])); // Resultado: [1, 2, 3, 4, 5]
console.log(eliminarDuplicados(['a', 'b', 'a', 'c'])); // Resultado: ['a', 'b', 'c']
console.log(eliminarDuplicados([true, true, false, false])); // Resultado: [true, false]
console.log("///////////////");

/* 
Solución 5: Eliminar Duplicados
Como se pide una función que reciba un array y elimine los elementos duplicados, nos tenemos que valer de la estructura 'Set' de JavaScript, la cual posee como característica principal que los datos insertados en ella no se pueden repetir. Y dado que Set es una estructura que no se puede imprimir directamente como un array usando 'console.log', nos valdremos de dos variables, una que genere un Set filtrando el arreglo ingresado, eliminando lógicamente los elementos duplicados, y una segunda variable que genere un nuevo arreglo a partir del Set qu3 se almacenó en la primer variable. */