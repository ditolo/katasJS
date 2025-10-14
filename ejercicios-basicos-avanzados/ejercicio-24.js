/* Utiliza un bucle para filtrar personajes de Star Wars por la especie "Human" y guárdalos en un 
nuevo array llamado humanCharacters. 
Imprime este nuevo array por consola. */

const characters = [ 
{ name: 'Luke Skywalker', species: 'Human' }, 
{ name: 'Darth Vader', species: 'Human' }, 
{ name: 'Chewbacca', species: 'Wookiee' }, 
{ name: 'Leia Organa', species: 'Human' }, 
{ name: 'R2-D2', species: 'Droid' }, 
{ name: 'C-3PO', species: 'Droid' }, 
{ name: 'Obi-Wan Kenobi', species: 'Human' }, 
{ name: 'Yoda', species: 'Unknown' }, 
{ name: 'Han Solo', species: 'Human' } 
]; 

// Añade tu código de bucle aquí

//Haré un código más reutilizable que reciba la lista, el campo a filtrar y el valor del mismo
function filterByField(list, field, value) {
    const humanCharacters = []; 
    for (character of list){
        if (character[field] === value){
            humanCharacters.push(character);
        }
    } return humanCharacters
}

//De esta forma podemos usar la misma función para filtar por "name"
console.log(filterByField(characters, "name", "Yoda"))
//o para cumplir con el requisito del ejercicio
console.log(filterByField(characters, "species", "Human"))