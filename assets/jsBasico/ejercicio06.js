//funciones se conocen como metodos
//en javascript el + sirve para concatenar= "11" + "1"=> "111"
//el onclick nunca debe ir en el html le dariamos mucha nformacon de nuestro codigo al usuario(<button onclick="nombreUsuario()">ejecutar</button>)
//la variable let nombre se puede declarar nuevamente porque esta fuera no esta en forma local en la funcion
let nombre = "pepito"

function nombreUsuario(){
    let nombre = prompt("ingrese su nombre");
    alert("tu nombre es: " + nombre);
    console.log("tu nombre es: ", + nombre);//la coma solo funciona solo en consola y la consola sirve para probar
}

console.log(nombre);
