//dom-data object model-permite manipular todo desde java script
//class para css y id para javascript
//el buton  busca al primer html que se encuentra
//el btn busca por id el archivo a ejecutar


let ejecutar = document.getElementById("btnEjecutar");

const cambiarNombre = () => {
    let nombre = prompt("ingrese tu nombre");
    alert("tu nombre es: " + nombre);
}


//los eventos se recomiendan que vayan a ala final
ejecutar.onclick = () => {
    cambiarNombre();
};