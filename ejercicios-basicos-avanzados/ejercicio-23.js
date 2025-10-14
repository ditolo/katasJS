/* Usa un bucle para crear 3 arrays de películas filtrados por categorías. 
Pelicula pequeña -> menos de 100 minutos, película mediana -> más de 100 minutos y menos 
de 200 y pelicula grande -> más de 200 minutos. 
Imprime cada array por consola. */
const movies = [ 
{ name: "Titan A.E.", durationInMinutes: 130 }, 
{ name: "Nightmare before Christmas", durationInMinutes: 225 }, 
{ name: "Inception", durationInMinutes: 165 }, 
{ name: "The Lord of the Rings", durationInMinutes: 967 }, 
{ name: "Star Wars: A New Hope", durationInMinutes: 214 }, 
{ name: "Terminator", durationInMinutes: 140 }, 
{ name: "Spirited Away", durationInMinutes: 80 }, 
{ name: "The Matrix", durationInMinutes: 136 }, 
{ name: "Amélie", durationInMinutes: 110 }, 
{ name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 }, 
]; 

function filterByDuration(movieArray, nameOfField, min, max) {
    let shortMovies = [];
    let mediumMovies = [];
    let longMovies = [];
    for (movie of movieArray){
        if (movie[nameOfField] < min){
            shortMovies.push(movie);
        } else if (movie[nameOfField] >= min && movie[nameOfField] <= max){
            mediumMovies.push(movie);
        } else if (movie[nameOfField] > max){
            longMovies.push(movie);
        }
    }
    return {shortMovies, mediumMovies, longMovies};
}

console.log(filterByDuration(movies, "durationInMinutes", 100, 200));