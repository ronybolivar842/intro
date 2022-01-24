//local Storage-consulta a la base de datos es una pequeña memoria vistual para que los desarrolladores 

let ejecutar = document.getElementById("btnEjecutar");
let nombreUsuario = document.getElementById("nombreUsuario");

const cambiarNombre = () => {
    let nombre = prompt("ingrese tu nombre");
    nombreUsuario.innerHTML = "bienvenido/a "  +  nombre;
    localStorage.setItem("nombre", nombre);
};

if (localStorage.getItem("nombre")) {
    nombreUsuario.innerHTML ="bienvenido/a  " + localStorage.getItem("nombre")
}


//los eventos se recomiendan que vayan a ala final
ejecutar.onclick = () => {
    cambiarNombre();
};
