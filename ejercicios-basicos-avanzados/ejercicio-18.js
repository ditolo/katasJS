/* Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan 
el id 11 y el id 40. 
Imprime en un console log el array resultante. 
Puedes usar este array: */
const placesToTravel = [ 
  { id: 5, name: "Japan" }, 
  { id: 11, name: "Venecia" }, 
  { id: 23, name: "Murcia" }, 
  { id: 40, name: "Santander" }, 
  { id: 44, name: "Filipinas" }, 
  { id: 59, name: "Madagascar" }, 
]; 
let spliced = placesToTravel

function removePlaces(list, id) {
    for (place of list){
        if (place.id === id) {
            spliced = list.toSpliced(list.indexOf(place),1);
        }
    }
}
removePlaces(spliced, 11);
removePlaces(spliced, 40);
console.log(placesToTravel);
console.log(spliced);
