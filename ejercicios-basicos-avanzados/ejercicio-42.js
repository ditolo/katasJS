/* Crea una función llamada swap que reciba un array y dos parametros que sean indices del array. 
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado 
como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array. 
Retorna el array resultante. */ 

const fantasticFour = [ 
"La antorcha humana", 
"Mr. Fantástico", 
"La mujer invisible", 
"La cosa", 
];
const swapPositions = (array, p1, p2) => {
    let inter = array[p1]
    array[p1]=array[p2]
    array[p2]=inter
    return array
}
console.log(swapPositions(fantasticFour, 1, 3))