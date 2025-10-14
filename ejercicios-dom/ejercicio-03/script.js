//1.1 Basandote en el array siguiente, crea una lista ul > li 
//dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
parentList = document.createElement('ul')
for (country of countries){
    listElement = document.createElement('li')
    listElement.innerText=country
    parentList.appendChild(listElement)
}
document.querySelector('body').appendChild(parentList)

//1.2 Elimina el elemento que tenga la clase .fn-remove-me. 
document.querySelector('.fn-remove-me').remove()

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//en el div de html con el atributo data-function="printHere". 

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']; 
parentList = document.createElement('ul')
for (car of cars){
    listElement = document.createElement('li')
    listElement.innerText=car
    parentList.appendChild(listElement)
}
document.querySelector('[data-function="printHere"]').appendChild(parentList)

//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
//h4 para el titulo y otro elemento img para la imagen. 

const countries2 = [ 
{title: 'Random title1', imgUrl: '<https://picsum.photos/300/200?random=1>'}, 
{title: 'Random title2', imgUrl: '<https://picsum.photos/300/200?random=2>'}, 
{title: 'Random title3', imgUrl: '<https://picsum.photos/300/200?random=3>'}, 
{title: 'Random title4', imgUrl: '<https://picsum.photos/300/200?random=4>'}, 
{title: 'Random title5', imgUrl: '<https://picsum.photos/300/200?random=5>'} 
]; 


for (country of countries2){
    let parentDiv=document.createElement('div')
    {
    let elementTitle = document.createElement('h4')
    elementTitle.innerText=country.title
    let elementImg = document.createElement('img')
    elementImg.src=country.imgUrl+"test"
    parentDiv.appendChild(elementTitle)
    parentDiv.appendChild(elementImg)
    }
    document.querySelector('body').appendChild(parentDiv)
}


//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
//elemento de la serie de divs. 
deleteButton = document.createElement('button')
deleteButton.addEventListener("click", deleteFunction=() => {
    let listElementsToRemove = document.querySelectorAll('div')
    index=listElementsToRemove.length-1
    listElementsToRemove[index].remove()
    console.log(index)
})
deleteButton.innerText="Borrar último elemento"
document.querySelector('body').appendChild(deleteButton)

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
//divs que elimine ese mismo elemento del html. 

parentArray=[]

parentDivs = document.querySelectorAll('div')
i=0
for (div of  parentDivs){
    deleteButton = document.createElement('button')
    deleteButton.innerText="Borrar este elemento"
    const parent = deleteButton.parentElement
    deleteButton.id=i
    div.appendChild(deleteButton)
}

allButtons=document.querySelectorAll('button')
allButtons.forEach(button=>{
    button.addEventListener("click", deleteThis=() => {
    console.log(event.target)
    event.target.parentNode.remove()
    })})
