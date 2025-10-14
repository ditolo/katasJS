/* Mixed For...of e includes: Usa un bucle for...of para recorrer todos los juguetes y elimina los que 
incluyan la palabra gato (también podéis crear uno nuevo con solo los que NO incluyan esa 
palabra). 
Recuerda usar la función .includes() para comprobar la palabra. 
Puedes usar este array: */

const toys = [ 
    {id: 5, name: 'Transformers'}, 
    {id: 11, name: 'LEGO'}, 
    {id: 23, name: 'Hot Wheels'}, 
    {id: 40, name: 'Rascador de gato'}, 
    {id: 40, name: 'FurReal Friends gato interactivo'}, 
    {id: 60, name: 'Nerf Blaster'}, 
    {id: 71, name: 'Sylvanian Families - Familia gato'} 
]; 



function filterToys(list, word, fieldToFilter) {
    let filteredToys = [];
    for (toy of list){
        if (typeof word === "string"){
        if(!toy[fieldToFilter].includes(word)){
            filteredToys.push(toy);
        }
    } else if (typeof word === "number"){
        if(toy[fieldToFilter] !== word){
            filteredToys.push(toy);
    }}}
    return filteredToys;
}

console.log(filterToys(toys, "gato", "name"));
console.log(toys);

//podemos reutilizar el código para eliminar por id: 
console.log(filterToys(toys, 40, "id"));