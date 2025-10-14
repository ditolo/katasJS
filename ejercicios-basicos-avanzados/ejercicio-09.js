/*Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los 
elementos. Completa la función denominada sumNumbers que toma un array de números 
como argumento y devuelve la suma de todos los números del array. 
Puedes usar este array para probar tu función: */
const numbers = [1, 2, 3, 5, 45, 37, 58]; 
const suma = 0;
// version con for of
function sumNumbers(numberList) { 
    suma=0;
    for (number of numberList){
        suma += number;
    }
    return suma;
} 
// version con reduce
suma = numbers.reduce((acumulador, elemento) => acumulador + elemento, 0);

//imprimimos ambos resultados
console.log(sumNumbers(numbers))
console.log(suma);