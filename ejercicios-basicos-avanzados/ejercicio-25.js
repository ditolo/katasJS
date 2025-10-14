/* Dada una lista de películas, cuenta cuántas son de antes del año 2000 y cuántas son 
posteriores, utilizando un bucle. 
Imprime ambos conteos por consola. */

const movies = [ 
{ title: 'The Matrix', releaseYear: 1999 }, 
{ title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 }, 
{ title: 'Inception', releaseYear: 2010 }, 
{ title: 'Jurassic Park', releaseYear: 1993 }, 
{ title: 'The Shawshank Redemption', releaseYear: 1994 }, 
{ title: 'Pulp Fiction', releaseYear: 1994 }, 
{ title: 'Avatar', releaseYear: 2009 }, 
{ title: 'The Dark Knight', releaseYear: 2008 }, 
{ title: 'Fight Club', releaseYear: 1999 }, 
{ title: 'Forrest Gump', releaseYear: 1994 } 
]; 
// Añade tu código de bucle aquí 
//Una vez más trataré de hacer un filtro reutilizable, recibiendo como parámetro el array de objetos,
//el campo a filtrar y el valor del campo

function filterBelowAndAbove(list, field, value)
{
    let belowValue=[];
    let atOrAboveValue=[];
    for (element of list){
        if (element[field]<value)belowValue.push(element)
        else if (element[field]>value)atOrAboveValue.push(element)
    }
    return {belowValue, atOrAboveValue}
}

console.log(filterBelowAndAbove(movies, "releaseYear", 2000))

