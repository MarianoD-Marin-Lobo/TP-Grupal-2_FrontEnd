/* 6. Convertir la primera letra de cada palabra en mayúscula.
Escribe una función que reciba una cadena y convierta la primera letra de cada palabra en mayúscula */

export function capitalizarPalabras(cadenaOracion) {   
    let cadenaOracionPalabrasCapit = '';

    let arrayPalabras = cadenaOracion.split(" ");

    
    for (let i = 0; i < arrayPalabras.length; i++) {
        arrayPalabras[i] = capPalabraIndiv(arrayPalabras[i]);
    }

    cadenaOracionPalabrasCapit += arrayPalabras[0];
    for (let j = 1; j < arrayPalabras.length; j++) {
        cadenaOracionPalabrasCapit += " " + arrayPalabras[j];        
    }

    console.log(`Solución-6: Convertir la primera letra de cada palabra en mayúscula.`);
    console.log(`Oración original ---> "${cadenaOracion}"`);
    console.log(`Oración con palabras capitalizadas ---> ${cadenaOracionPalabrasCapit}`) 
    console.log(`////////////////////////////////////////`); 
}

// Función auxiliar para capitalizar la inicial de cada palabra.
function capPalabraIndiv(palabraIndividual) {

    let palabraArray = palabraIndividual.split(''); 

    let palabraIndivCapitalizada = palabraArray[0].toUpperCase();
    for (let i = 1; i < palabraArray.length; i++) {
        palabraIndivCapitalizada += palabraArray[i]; 
    }

    return palabraIndivCapitalizada;
}

/* Pensamos esta función planificando ciertos pasos que debía seguir:
1) Separar la oración que se le pasa en palabras individuales y almacenar estas palabras en un arreglo.
2) Tomar cada palabra, separar sus letras y almacenarlas en un arreglo.
3) Tomar cada arreglo que representa a una palabra y transformar su primer elemento (letra inicial) a mayúscula 
4) Reconstruir la palabra almacenada como arreglo de letras.
5) Reconstruir la oración original con cada una de las palabras almacenadas con su inicial capitalizada.

NOTA: los pasos 2), 3) y 4) nos valimos de definir una función auxiliar que capitalazara la inicial de cada palabra con el fin de sobrecargar el código de la función solicitada para el ejercicio. */
