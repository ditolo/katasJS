//Ahora realizaremos una petición a la PokeAPI, queremos mostrar al entrar en la página la 
// imagen de un Pokemon, la magia estará en que cada vez que recargues la página, 
// será un nuevo Pokemon dentro de la primera generación de Pokemon, es decir, del 1 al 151.

//Los Pokemon no solo tienen una imagen, si no que tendrán muchas, hay que hallar la manera de 
// encontrar la que más os guste.

 /* 
 Para ello el HTML será muy sencillo, y la URL esta vez os la aportaremos directamente, 
 aunque os aconsejamos echarle un ojo a la documentación ya que es muy completa.

Documentación: https://pokeapi.co/

URL: https://pokeapi.co/api/v2/pokemon/1

Tened en cuenta que esta URL se refiere al pokemon número 1, que es bulbasaur, 
debemos hallar la manera de con una url similar ir consiguiendo pokemons aleatorios */

function randomFetch(min, max) {
    const randomId = Math.floor(Math.random() * (max) + min);
    console.log(randomId);
    fetch("https://pokeapi.co/api/v2/pokemon/" + randomId)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const image = document.querySelector(".random-image");
            image.src = data.sprites.other["official-artwork"].front_shiny;
        })
        .catch(error => console.log(error));
}