/* 1. Contar vocales en una cadena
Escribe una función que reciba una cadena y cuente el número de vocales */

export function contarVocales(stringIntroduced) {
    let vowelCounter = 0;

    let stringArray = stringIntroduced.split('');

    for (let i = 0; i < stringArray.length; i++) {
        switch (stringArray[i].toLowerCase()) {
            case 'a':
                vowelCounter += 1;
                break;
            case 'á':
                vowelCounter += 1;
                break;
            case 'e':
                vowelCounter += 1;
                break;
            case 'é':
                vowelCounter += 1;
                break;
            case 'i':
                vowelCounter += 1;
                break;
            case 'í':
                vowelCounter += 1;
                break;
            case 'o':
                vowelCounter += 1;
                break;
            case 'ó':
                vowelCounter += 1;
                break;
            case 'u':
                vowelCounter += 1;
                break;
            case 'ú':
                vowelCounter += 1;
                break;            
        }
    }       
    
    return vowelCounter;
}

/* Dado que en este ejercicio se nos pide contar vocales en una cadena, definimos primero un contador para almacenar esta cantidad requerida y luego un arreglo cuyos elementos se compongan de las letras de la cadena que se le introduzca por parámetro al llamar a la función desde la consola.
Luego, como JavaScript es case-sensitive, la condición a verificar en la estructura de control, para saber si es vocal o no, debía tener algún método para estandarizar o equiparar de alguna manera, lo que se está buscando en la cadena (vocales) con los valores posibles, por lo que le asignamos el método '.ToLowerCase()' para que buscara exclusivamente si la/s vocal/es se encuentran o no en la cadena, independientemente de como se la haya ingresado (Mayúscula/Minúscula) al introducir la cadena como parámetro. */
