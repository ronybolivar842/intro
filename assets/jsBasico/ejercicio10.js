let dia = prompt("ingrese un dia a la semana");

if (
  dia === "lunes" ||
  dia === "martes" ||
  dia === "miercoles" ||
  dia === "jueves" ||
  dia === "viernes"
) {
  alert("entre semana");
} else {
  if (dia === "sabado" || dia === "domingo") {
    alert("fin de semana");
  } else {
    alert("favor ingrese solo dias de la semana");
  }
}
