/*1. Escribe una función sumar que reciba dos números y un callback. El callback debe 
ser ejecutado con el resultado de la suma.*/

function sumar(a, b, callback) {
    const resultado = a + b;
    callback(resultado);
}

// Ejemplo 
sumar(2, 3, function(resultado) {
    console.log("La suma es:", resultado);
});



/*2. Crea una función aplicarOperacion que reciba un número y un callback. La función
debe ejecutar el callback pasándole el número.*/

function aplicarOperacion(numero, callback) {
    callback(numero);
}
// Ejemplo 
aplicarOperacion(5, function(n) {
    console.log("Número recibido:", n);
});



/*3. Escribe una función que use setTimeout con un callback para imprimir un mensaje
después de 2 segundos.*/

function imprimirMensaje() {
    setTimeout(function() {
        console.log("Mensaje después de 2 segundos");
    }, 2000);
}

imprimirMensaje();




/*4. Dado un array de nombres, conviértelos a mayúsculas y ordénalos alfabéticamente.*/

const nombres = ["maria", "ana", "carlos"];
const nombresOrdenados = nombres.map(nombre => nombre.toUpperCase()).sort();

console.log(nombresOrdenados);




/*5. Usa map para duplicar los números de un array y luego filter para obtener solo los
mayores de 10.*/

const numeros = [3, 6, 8, 10];
const resultado = numeros.map(num => num * 2).filter(num => num > 10);

console.log(resultado);




/*6. Usa map para convertir todas las cadenas en un array a mayúsculas.
console.log(convertirAMayusculas(["hola", "mundo"])); // ["HOLA", "MUNDO"]*/

function convertirAMayusculas(arr) {
    return arr.map(cadena => cadena.toUpperCase());
}

console.log(convertirAMayusculas(["hola", "mundo"]));




/*7. Escribe una función que reciba un string y use forEach para imprimir cada letra en
una nueva línea.*/

function imprimirLetras(cadena) {
    cadena.split("").forEach(letra => console.log(letra));
}

imprimirLetras("hola");




/*8. Usa every para verificar si todos los números en un array son positivos.*/

const numeros1 = [1, 2, 3, 4];
const todosPositivos = numeros1.every(num => num > 0);

console.log("¿Todos son positivos?", todosPositivos);




/*9. Usa reduce para combinar las palabras de un array en una sola oración.*/

const palabras = ["Hola", "mundo", "de", "VankVersity"];
const oracion = palabras.join(" ");

console.log(oracion);




/*10. Usa map para extraer un campo específico de un array de objetos y convertirlo en
un nuevo array.
const usuarios = [{ nombre: "Ana" }, { nombre: "Juan" }, { nombre: "Luisa" }];
console.log(nombres); // ["Ana", "Juan", "Luisa"]*/


const usuarios = [{ nombre2: "Ana" }, { nombre2: "Juan" }, { nombre2: "Luisa" }];
const nombres2 = usuarios.map(usuario => usuario.nombre2);

console.log(nombres2);




/*11. Escribe una función que use map y reduce para calcular el total de ventas en un
array de objetos.

const ventas = [ { producto: "A", cantidad: 10, precio: 2 }, { producto:

"B", cantidad: 5, precio: 3 } ];*/


const ventas = [{ cantidad: 2, precio: 5 }, { cantidad: 3, precio: 10 }];
const total = ventas.map(venta => venta.cantidad * venta.precio).reduce((a, b) => a + b);

console.log("Total de ventas:", total);




/*12. Usa reduce para agrupar palabras en un objeto según su longitud.
const palabras = ["hola", "adiós", "sol", "estrella"];
console.log(agrupado); // {4: ["hola", "sol"], 5: ["adiós"], 8: ["estrella"]}*/

const palabras1 = ["hola", "adios", "sol", "estrella"];

const agrupado = palabras1.reduce((resultado, palabra) => {
    const longitud = palabra.length;
    if (!resultado[longitud]) {
        resultado[longitud] = []; // Si no existe la clave, se inicializa con un array vacio
    }
    resultado[longitud].push(palabra); // Agrega la palabra al array 
    return resultado; // Devuelve el objeto acumulado
}, {});

console.log(agrupado); 




/*13. Usa reduce para aplanar un array de arrays en uno solo nivel.
const arrays = [[1, 2], [3, 4], [5, 6]];
console.log(plano); // [1, 2, 3, 4, 5, 6]*/

const arrays = [[1, 2], [3, 4], [5, 6]];
const plano = arrays.flat();

console.log(plano);




/*14. Crea una función que reciba un array de números y aplique diferentes operaciones
(multiplicar, dividir, sumar) según condiciones definidas en un callback.*/


function aplicarOperaciones(numeros, callback) {
    return numeros.map(callback);
}

const num = [10, 20, 30, 40];

// Callback con condiciones
const operacion = num => {
    if (num < 20) {
        return num * 2; // Multiplicar si el numero es menor que 20
    } else if (num === 20) {
        return num / 2; // Dividir si el numero es igual a 20
    } else {
        return num + 10; // Sumar si el numero es mayor que 20
    }
};

const result = aplicarOperaciones(num, operacion);

console.log(result);




/*15. Usa reduce para contar cuántas veces aparece cada palabra en un array y devolver
un objeto con las frecuencias.
const palabras = ["hola", "mundo", "hola", "javascript", "mundo", "hola"];
console.log(contarPalabras(palabras)); // { hola: 3, mundo: 2, javascript: 1 }*/

const palabras2 = ["hola", "mundo", "hola", "javascript", "mundo", "hola"];;
const frecuencias = {};

palabras2.forEach(palabra => {
    frecuencias[palabra] = (frecuencias[palabra] || 0) + 1;
});

console.log(frecuencias);



/*16. Crea una función que reciba un array de objetos con propiedades precio y cantidad y
devuelva un nuevo array con los precios totales (precio × cantidad) solo de los
productos cuya cantidad sea mayor que 10.
const productos = [ { precio: 5, cantidad: 15 }, { precio: 10, cantidad: 5 }, { precio: 8,
cantidad: 20 } ];
console.log(calcularTotales(productos)); // [75, 160]*/

const productos = [ { precio: 5, cantidad: 15 }, { precio: 10, cantidad: 5 }, { precio: 8,
    cantidad: 20 } ];
const totales = productos
    .filter(prod => prod.cantidad > 10)
    .map(prod => prod.precio * prod.cantidad);

console.log(totales);



/*17. Usa reduce para eliminar duplicados de un array
const numeros = [1, 2, 2, 3, 4, 4, 5];*/

const numeros3 = [1, 2, 2, 3, 4, 4, 5];

const sinDuplicados = numeros3.reduce((resultado, num) => {
    if (!resultado.includes(num)) {
        resultado.push(num);
    }
    return resultado;
}, []);

console.log(sinDuplicados);


/*18. Usa reduce para agrupar un arreglo de números en un objeto con las claves pares e
impares, donde cada clave contiene un arreglo con los números correspondientes.
Ejemplo: { pares: [2, 4, 6, 8], impares: [1, 3, 5, 7] }*/

const numeros4 = [1, 2, 3, 4, 5, 6, 7, 8];
const pares = numeros4.filter(num => num % 2 === 0);
const impares = numeros4.filter(num => num % 2 !== 0);

console.log({ pares, impares });