//Accederemos a los datos de una API pública de Game Of Thrones, queremos un select con todos los nombres de los personajes para que cuando un usuario seleccione un nombre salga su imagen en el medio de la página, algo así:
/*Para obtener los datos con los que jugar necesitaremos estudiar la documentación de la API y buscar la
 url necesaria para los datos que queramos, para este paso os pedimos que de verdad os esforcéis
  buscándola en la documentación, queremos la url que me traiga los datos de todos los personajes 
  de GOT, sin embargo, en la slide siguiente tendréis la url directa de esos datos.

URL de la documentación (para que indaguéis): https://thronesapi.com/

Esta sería la URL final (la que deberéis utilizar para vuestra petición):

https://thronesapi.com/api/v2/Characters*/
allChars = [];
function loadCharacters() {
  const select = document.getElementById("character-list");
  fetch("https://thronesapi.com/api/v2/Characters")
    .then(response => response.json())
    .then(data => {
        allChars = data;
        console.log(data);
        data.forEach(character => {
            const characterOption = document.createElement("option");
            characterOption.value = character.id;
            characterOption.text = character.fullName;
            select.appendChild(characterOption);
        });
    })
    .catch(error => console.log(error));
  }

function fillCharData() { 
    const select = document.getElementById("character-list");
    const selectedId = select.value;
    const image = document.getElementById("character-image");
    console.log(selectedId);
    console.log(allChars[selectedId]);
    const selectedChar = allChars[selectedId]
    image.src = selectedChar.imageUrl;
}

loadCharacters();