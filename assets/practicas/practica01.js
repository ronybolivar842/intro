/**
 * 1-por medio de un boton pedimos al usuario el nombre
 * 2-despues del prompt del  nombre aparece mas pormt
 * 3-edad,direccion,documento,telefono
 * 4-en un alert concatenado el siguiente mensaje
 * 5-hola + nombre + tu edad es : + tu direccion es : + direccion + tu numero telefonico es: + telefono + y tu documento es +documento
 */

let nombre = "rony"
let edad = "25"
const nombreUsuario = () => {
let nombreUsuario = prompt("ingrese su nombre");
let edadUsuario = prompt("ingrese su edad");
let direccionUsuario = prompt("ingrese su direccion");
let documentoUsuario = prompt("ingrese su documento");
let telefonoUsuario = prompt("ingrese su telefono");
alert("hola" + " " + "tu nombre es: " + nombreUsuario + "\ntu edad es: " + edadUsuario + "\ntu direccion es: " + direccionUsuario + "\ntu documento es: " + documentoUsuario + "\ntu telefono es: " + telefonoUsuario);
console.log("tu nombre es: ", + nombreUsuario);

}

console.log(nombre);
console.log(edad);
