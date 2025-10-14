/*Buscar la palabra más larga: Completa la función que tomando un array de strings como 
argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá 
devolver el primero. 
Puedes usar este array para probar tu función: */
const avengers = [ 
"Hulk", 
"Thor", 
"Iron Man", 
"Captain A.", 
"Spiderman", 
"Captain M. Rajoy", 
];
function findLongestWord(stringList) {
 let letrasPalabraMasLarga = 0;
 let posicionMasLarga = 0;
 for (let i = 0 ; i < stringList.length ; i++){
    if (stringList[i].length > letrasPalabraMasLarga){
        letrasPalabraMasLarga = stringList[i].length;
        posicionMasLarga = i;}}
    console.log("La palabra más larga es: "+ stringList[posicionMasLarga] + " con un total de " + letrasPalabraMasLarga + " caracteres.");
    return stringList[posicionMasLarga];}
findLongestWord(avengers);