//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click 
document.getElementById('btnToClick').addEventListener('click', (event)=>{
    console.log(event)
})

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input. 
document.getElementsByClassName('focus')[0].addEventListener('focusin', (event)=>{
    console.log(event)
})

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. 
field = document.getElementsByClassName('value')[0]
field.addEventListener('input', (event)=>{
    console.log(event)
    }
)
