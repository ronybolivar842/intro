//dom
//(nombreUsuario.innerHTML = "bienvenido/a"  + " " + nombre;) = (nombreUsuario.innerHTML += nombre;)
let ejecutar = document.getElementById("btnEjecutar");
let nombreUsuario = document.getElementById("nombreUsuario");

const cambiarNombre = () => {
    let nombre = prompt("ingrese tu nombre");
    let nombre = prompt("ingrese su edad");
    nombreUsuario.innerHTML = "bienvenido/a"  + " " + nombre;
};


//los eventos se recomiendan que vayan a ala final
ejecutar.onclick = () => {
    cambiarNombre();
};
