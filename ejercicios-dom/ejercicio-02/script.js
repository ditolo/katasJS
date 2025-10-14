//2.1 Inserta dinamicamente en un html un div vacio con javascript. 
const newElement = document.createElement('div');
parent = document.querySelector('p')
parent.appendChild(newElement)
//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript. 
 const newElement2 = document.createElement('div');
newElement.innerHTML='<p>Hola!!</p>'
parent = document.querySelector('p')
parent.appendChild(newElement2)
//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un  loop con javascript. 
const newElement3 = document.createElement('div');
for (i=0;i<6;i++){
    let newElementp = document.createElement('p');
    newElementp.innerText="Hola Mundo, soy el párrafo " + i
    newElement3.appendChild(newElementp)
    parent = document.querySelector('p')
    parent.appendChild(newElementp)}

//2.4 Inserta dinamicamente con javascript en un html una p con el  texto 'Soy dinámico!'. 
const newElement4 = document.createElement('div');
newElement4.innerHTML='<p>Soy dinámico!</p>'
parent = document.querySelector('p')
parent.appendChild(newElement4)
//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'. 
document.querySelector('.fn-insert-here').innerText="Wubba Lubba dub dub" 


//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array. 
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']; 
let parentList=document.createElement('ul')
for(app of apps){
    let listElement = document.createElement('li')
    listElement.innerText=app
    parentList.appendChild(listElement)
}
document.querySelector('body').appendChild(parentList)
 
//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me 
let eliminar = document.querySelectorAll('.fn-remove-me')
for (elemento of eliminar){
    //elemento.innerHTML=``
    document.querySelector('p').parentNode.removeChild(elemento)
}

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.  
// Recuerda que no solo puedes insertar elementos con .appendChild. 
let hermano = document.createElement('p')
hermano.innerText="Voy en medio!"
document.querySelector('div').insertAdjacentElement("afterend", hermano)

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
//  .fn-insert-here
let divs = document.querySelectorAll('div')
for(div of divs){
    let hijo = document.createElement('p')
    hijo.innerText="Voy dentro!"
    div.appendChild(hijo)
}