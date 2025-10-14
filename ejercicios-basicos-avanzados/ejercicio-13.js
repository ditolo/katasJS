/* Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea 
comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en 
caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false. 
Puedes usar este array para probar tu función: */

const names = [ 
'Peter', 
'Steve', 
'Tony', 
'Natasha', 
'Clint', 
'Logan', 
'Xabier', 
'Bruce', 
'Peggy', 
'Jessica', 
'Marc' 
];

function nameFinder(nameList, nameToSearch) { 
 for (nombre of nameList) {
    if (nombre === nameToSearch){
        console.log("El nombre "+ nameToSearch + " existe en la posición " + nameList.indexOf(nombre));
        return true;
    }}
    console.log("El nombre "+ nameToSearch + " no existe en la lista.");
    return false;
}

console.log(nameFinder(names, "Natasha"));
console.log(nameFinder(names, "David"));  

// busqueda parcial
function partialNameFinder(nameList, partialName) {
    nombresCoincidentes =[];
    for (nombre of nameList) {
         if (nombre.includes(partialName)){
                nombresCoincidentes.push(nombre);
         }}
            if (nombresCoincidentes.length > 0) {
                console.log("Los nombres que contienen " + partialName + " son: " + nombresCoincidentes);
                return nombresCoincidentes;}
            else {
                console.log("No hay nombres que contengan " + partialName);
                return false;
            }}

console.log(partialNameFinder(names, "er"));
console.log(partialNameFinder(names, "a"));
console.log(partialNameFinder(names, "David"));