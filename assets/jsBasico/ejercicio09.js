let cuidad = prompt("ingresa tu cuidad");

switch (cuidad) {
    case "bogota":
        alert("clima frio");
        break;
    case "pasto":
        alert("clima frio");
        break;
    case "armenia":
        alert("clima templado");
        break;
    case "medellin":
        alert("clima templado");
        break;
    default:
        alert("no ingreso una cuidad validad");
        break;
}

if (cuidad=== "bogota" || cuidad === "pasto") {
    alert("clima frio");
} else {
    if (cuidad === "armenia" || cuidad === "medellin") {
        alert("clima templado");
    } else {
        alert("no ingreso una cuidad validad");
    }
}
