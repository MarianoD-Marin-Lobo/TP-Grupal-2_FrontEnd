/* 2. Muestra el mayor número de un array
Escribe una función que itere un array en JavaScript y devuelva el número más alto */

export function maxNum(arrayNros) {
    
    let maxNro = arrayNros[0];

    for (let i = 1; i < arrayNros.length; i++) {
        if (arrayNros[i] > maxNro) {
            maxNro = arrayNros[i];      
        }
    }

    return maxNro;
}

/* Como se pide mostrar el número mas alto de un arreglo ingresado, debemos recurrir a una variable auxiliar, en este caso llamada 'maxNum', para realizar la comparación. A ella le asignamos el elemento del arreglo ingresado ubicado en la primera posición de éste.
Luego iteramos todo el arreglo desde el elemento ubicado en la segunda posición comparando el valor alojado en 'maxNum' con cada uno de los elementos restantes del arreglo ingresado. */



// /////////////////////////////////////////////////////////////////////////////////////////



/* 3. Calcular la media de un array de números
Escribe una función que tome un array de números y devuelva la media. */


export function calcularMedia(arrayParam) {
    let arrayMedia;
    let arraySum = 0;

    for (let i = 0; i < arrayParam.length; i++) {
        arraySum += arrayParam[i];        
    }

    arrayMedia = arraySum / arrayParam.length;

    return arrayMedia;
}

/* Se pide calcular la media, entendemos valor promedio, de un array de números.
Para ello, debemos definirs una variable para almacenar este valor, que se calculará al final del proceso, y una segunda variable que vaya acumulando los valores que componen los elementos del array cuando éste se itere en el ciclo FOR.
Finalmente, se realiza el cálculo de la media dividiendo la suma de todos los elementos por el tamaño del array. */
