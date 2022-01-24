/**
 * el usuario puede ingresar 5 departamentos de colombia
 * promp que diga por favor ingrese uno de los departamentos
 * va ser una validacion de los departamentos y dependiendo de cada uno va mostrar
 * un promt diferente
 * porque va mostrar 5 cuidades y pueblos  de cada uno de los departamentos
 */
/**
 * amazonas-leticia,la victoria,tarapaca,la pedrera,puerto santander
 * cundinamarca-bogota,soacha,chia,funza,madrid
 * antioquia-medellin,bello,caldas,itagui,envigado
 * valle del cauca-cali,buenaventura,buga,cartago,palmira
 * caqueta-florencia,curillo,morelio, el doncello,albania
 */

let departamento = prompt("ingrese uno de los departamentos: " + "\namazonas" + "\ncundinamarca" + "\nantioquia" + "\nvalle del cauca" + "\ncaqueta");

if (
  departamento === "amazonas" ||
  departamento === "cundinamarca" ||
  departamento === "antioquia" ||
  departamento === "valle del cauca" ||
  departamento === "caqueta"
) {
    
    if (departamento === "amazonas") {
        let cuidad = prompt("ingrese una de estas cuidades: " + "\nleticia" + "\nla victoria" + "\ntarapaca" + "\nla pedrera" + "\npuerto santander");
        if (cuidad === "leticia") {
            alert("el maximo calor");
        }
        if (cuidad === "la victoria") {
            alert("la maxima victoria");
        }
        if (cuidad === "tarapaca") {
            alert("la guerra de tapaca");
        }
        if (cuidad === "la pedrera") {
            alert("el lugar de las piedras");
        }
        if (cuidad === "puerto santander") {
            alert("el mejor puerto");
        }

    }
    if (departamento === "cundinamarca") {
        let cuidad = prompt("ingrese una de estas cuidades: " + "\nbogota" + "\nsoacha" + "\nchia" + "\nfunza" + "\nmadrid")
        if (cuidad === "bogota") {
            alert("capital");
        }
        if (cuidad === "soacha") {
            alert("los grandes sembrios");
        }
        if (cuidad === "chia") {
            alert("huerto de chias");
        }
        if (cuidad === "funza") {
            alert("lugar de fundiciones");
        }
        if (cuidad === "madrid") {
            alert("familia del real madrid");
        }

    }
    if (departamento === "antioquia") {
        let cuidad = prompt("ingrese una de estas cuidades: " + "\nmedellin" + "\nbello" + "\ncaldas" + "\nitagui" + "\nenvigado")
        if (cuidad === "medellin") {
            alert("tierra del pecado");
        }
        if (cuidad === "bello") {
            alert("las mujeres mas bellas");
        }
        if (cuidad === "caldas") {
            alert("caldo de gallina");
        }
        if (cuidad === "itagui") {
            alert("comen itagui");
        }
        if (cuidad === "envigado") {
            alert("donde terminas embriagado");
        }

    }
    if (departamento === "valle del cauca") {
        let cuidad = prompt("ingrese una de estas cuidades: " + "\ncali" + "\nbuenaventura" + "\nbuga" + "\ncartago" + "\npalmira")
        if (cuidad === "cali") {
            alert("capital de las caleñas");
        }
        if (cuidad === "buenaventura") {
            alert("donde todos son bien aventurados");
        }
        if (cuidad === "buga") {
            alert("son similares a buda");
        }
        if (cuidad === "cartago") {
            alert("la batalla de cartago");
        }
        if (cuidad === "palmira") {
            alert("cuidad de los palmares");
        }

    }
    if (departamento === "caqueta") {
        let cuidad = prompt("ingrese una de estas cuidades: " + "\nflorencia" + "\ncurillo" + "\nmorelio" + "\nel doncello" + "\nalbania")
        if (cuidad === "florencia") {
            alert("tierra de las flores");
        }
        if (cuidad === "curillo") {
            alert("tierra de cursis");
        }
        if (cuidad === "morelio") {
            alert("club de futbol morelia");
        }
        if (cuidad === "el doncello") {
            alert("donde hay doncellas");
        }
        if (cuidad === "albania") {
            alert("puros blanquitos");
        } else {
            alert("favor ingrese la cuidad indicadas");
        }

    }

} else {
    alert("favor ingrese los departamentos indicados");
}
