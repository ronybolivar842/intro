/**
 *en un html vamos a tener los siguientes textos
-nombre :
- edad :
-direccion :
-telefono :
-boton (ingresar datos)
aparecen varios prompt que nos pidan la informacion
minuto 45
-localstorage
 */
//dom
//(nombreUsuario.innerHTML = "bienvenido/a"  + " " + nombre;) = (nombreUsuario.innerHTML += nombre;)
let ejecutar = document.getElementById("btnEjecutar");
let nombreUsuario = document.getElementById("nombreUsuario");
let edadUsuario = document.getElementById("edadUsuario");
let direccionUsuario = document.getElementById("direccionUsuario");
let telefonoUsuario = document.getElementById("telefonoUsuario");
let documentoUsuario = document.getElementById("documentoUsuario");
let localStorage = document.getElementById("localStorage");



const cambiarNombre = () => {
    let nombre = prompt("ingrese tu nombre");
    nombreUsuario.innerHTML = "nombre: "  + "  " + nombre;
    localStorage.setItem("nombre", nombre);

    let edad = prompt("ingrese tu edad");
    edadUsuario.innerHTML = "edad: "  + "  " + edad;
    localStorage.setItem("edad", edad);

    let direccion = prompt("ingrese tu direccion");
    direccionUsuario.innerHTML = "direccion: "  + "  " + direccion;
    localStorage.setItem("direccion", direccion);

    let telefono = prompt("ingrese tu telefono");
    telefonoUsuario.innerHTML = "telefono: "  + "  " + telefono;
    localStorage.setItem("telefono", telefono);

    let documento = prompt("ingrese tu documento");
    documentoUsuario.innerHTML = "documento: "  + "  " + documento;
    localStorage.setItem("documento", documento);


};

if (localStorage.getItem("nombre")) {
    nombreUsuario.innerHTML ="nombre:  " + localStorage.getItem("nombre")
}
if (localStorage.getItem("edad")) {
    nombreUsuario.innerHTML ="edad:  " + localStorage.getItem("edad")
}
if (localStorage.getItem("direccion")) {
    nombreUsuario.innerHTML ="direccion:  " + localStorage.getItem("direccion")
}
if (localStorage.getItem("telefono")) {
    nombreUsuario.innerHTML ="telefono:  " + localStorage.getItem("telefono")
}
if (localStorage.getItem("documento")) {
    nombreUsuario.innerHTML ="documento:  " + localStorage.getItem("documento")
}


//los eventos se recomiendan que vayan a ala final
ejecutar.onclick = () => {
    cambiarNombre();
};