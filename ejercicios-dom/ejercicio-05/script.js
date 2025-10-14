/*Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
que imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de 
lo posible. */

//En este ejercicio he creado un carrusel siguiendo la documentación oficial de MDN, a ver qué tal sale

const albums = [
"De Mysteriis Dom Sathanas", 
"Reign of Blood", 
"Ride the Lightning", 
"Painkiller", 
"Iron Fist", 
]; 

const insertList = (albumList) => {
    let listBase = document.createElement('ul')
    console.log(listBase)
    for (album of albumList) {
        console.log(album)
        let listElement = document.createElement("li")
        listElement.innerText = album
        console.log(listElement)
        listBase.appendChild(listElement)
    }
    document.getElementById('carousel-parent').appendChild(listBase)
}

insertList(albums)