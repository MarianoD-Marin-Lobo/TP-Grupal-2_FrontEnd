/* 7. Generar los primeros N números de la sucesión de Fibonacci.
Escribe una función que tome un número n y devuelva los primeros n números de la sucesión de Fibonacci. */
//cambios en la rama-martin
export function fibonacci(n) {
    let cantValida = true;

    let sucesionFibonacci = [0, 1];
    
    if (typeof n !== 'number' || isNaN(n) || n <= 0 || !Number.isInteger(n)) {        
        cantValida = false;
        sucesionFibonacci.splice(0, 2);
    } else if (n == 1) {
        sucesionFibonacci.splice(1, 1);
    } else if (n >= 3) {
        for (let i = 2; i < n; i++) {
            let nuevoTermino = sucesionFibonacci[i-1] + sucesionFibonacci[i-2];
            sucesionFibonacci.push(nuevoTermino);
        }
    }

    if (cantValida) {
        console.log(`Fibonacci hasta el ${n}º término -> ${sucesionFibonacci}`) 
    } else {
        console.log('La cantidad de términos ingresada no es válida.FIN');
    }
}

/* Para desarrollar la función que dado un número 'n' devuelva los primeros 'n' números de la sucesión de Fibonacci definimos una variable 'cantValida' para verificar que esta cantidad sea correcta y, de acuerdo a su valor final emita uno u otro mensaje según el valor ingresado.

La validez de la cantidad ingresada se evalúa en el primer condicional IF, verificando que se ingrese un número ENTERO, POSITIVO y MAYOR A CERO.

Dado que, en la sucesión de Fibonacci, cada término se compone de la suma de los dos anteriores, predifinimos el array hasta el segundo término y lo manipulamos de acuerdo al valor ingresado.
Si se ingresa '1', al array predefinido se saca el ultimo término con el método 'splice', si se ingresa 2 no sufre modificaciones y si ingresa 3 o mas se le adicionan los términos faltantes de acuerdo a la condición mencionada característica de esta sucesión.
En estos 3 casos, la variable 'cantValida' cambia su valor a 'true' verificando que la cantidad ingresada fue correcta.

Finalmente, se muestra el mensaje con la cantidad de terminos requeridos y la sucesión resultante o un mensaje de error de acuerdo al valor final que adoptó la variable 'cantValida'.*/