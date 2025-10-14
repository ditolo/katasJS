/* Desarrolla una función que busque en un array de objetos representando mutantes si existe 
alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no. 
Considera el caso de múltiples mutantes con el mismo poder. */
const mutants = [ 
{ name: 'Wolverine', power: 'regeneration' }, 
{ name: 'Magneto', power: 'magnetism' }, 
{ name: 'Professor X', power: 'telepathy' }, 
{ name: 'Jean Grey', power: 'telekinesis' }, 
{ name: 'Rogue', power: 'power absorption' }, 
{ name: 'Storm', power: 'weather manipulation' }, 
{ name: 'Mystique', power: 'shape-shifting' }, 
{ name: 'Beast', power: 'superhuman strength' }, 
{ name: 'Colossus', power: 'steel skin' }, 
{ name: 'Nightcrawler', power: 'teleportation' },
{ name: 'Goku', power: 'teleportation' } 
]; 

function findMutantByPower(mutantList, power) { 
    filteredMutants=[]
    found=false
    for(mutant of mutantList){
        if (mutant.power===power){filteredMutants.push(mutant.name)
        found = true;}
    }
    if (!found) return ("Error 404, poder " + power +" no encontrado")
    else return filteredMutants.join(", ")
}
console.log(findMutantByPower(mutants, "teleportation"))
console.log(findMutantByPower(mutants, "Super Tarjeta de Crédito"))
console.log(findMutantByPower(mutants, "steel skin"))