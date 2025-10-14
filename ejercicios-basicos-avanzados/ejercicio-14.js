/* Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite 
cada una de las palabras que lo conforma. 
Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,... 
Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea 
claro. Puedes usar este array para probar tu función: */ 

const words = [ 
'code', 
'repeat', 
'eat', 
'sleep', 
'code', 
'enjoy', 
'sleep', 
'code', 
'enjoy', 
'sleep', 
'code' 
]; 
function repeatCounter(list) { 
 let palabrasContadas = [];
    for (palabra of list) {
        let contador = 0;
        for (comparada of list) {
            if (palabra === comparada) {
                contador++;
            }
        }
        if (!palabrasContadas.includes(palabra + ": " + contador)) {
            palabrasContadas.push(palabra + ": " + contador);
    }
}
 return palabrasContadas;} 

console.log(repeatCounter(words));