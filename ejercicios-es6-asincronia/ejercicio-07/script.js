/* 7.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando
.filter() y usa .reduce() para conseguir la media de sus .score.
La función .find() también podría ayudarte para encontrar el genero 'RPG' en el
array .gender. */

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
]

const rpggames = videogames.filter(checkrpg);

function checkrpg(game) {
    return game.genders.includes('RPG');
}
console.log(rpggames);

function calculateavg(accumulator, game) {
    return accumulator + game.score / rpggames.length;
}

console.log("La media de puntuación de los RPG es " + rpggames.reduce(calculateavg, 0));