var precio_base = 2000;

var edad_18 = 0.1; // 10%
var edad_25 = 0.2;// 20%
var edad_50 = 0.3;// 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2;// 20%
var casado_50 = 0.3;// 30%

var hijos_recargo = 0.2; // 20%

const obtener_recargo = (edad) => {
    if (edad <= 24) {
        return precio_base * 0.1;
    }
    if (edad <= 49) {
        return precio_base * 0.2;
    }
    return precio_base * 0.3;
};

const cotizacion = () => {
    const nombre = prompt("ingrese su nombre, por favor");

    const edad = parseInt(prompt("¿ cual es su edad?", "ingrese solo numeros"));
    if (edad < 18) {
        return alert("Aun no es mayor de edad");
    }

    let precio = 2000;
    let recargo = 0;

    recargo += obtener_recargo(edad);

    let propiedades = prompt("¿Usted tiene propiedades?", "si/no")

    if (propiedades.toLowerCase() == "si") {
        let cantidad_propiedades = parseInt(prompt("¿Cuantas propiedades tiene?"));

        for (let contador = 1; contador <= cantidad_propiedades; contador++){
            recargo += precio * 0.35;
        }

    }

    let sueldo = parseInt(prompt("¿Cual es su sueldo?"));
    recargo += sueldo * 0.05;
    
    const conyugue = prompt("¿Usted esta casado?", "si/no");

    if (conyugue.toLowerCase() == "si") {
        const edad_conyugue = prompt("¿Cual es la edad de su conyugue?");
        recargo += obtener_recargo(edad_conyugue);
    }

    const hijos = prompt("¿usted tiene hijos?", "si/no");

    if (hijos.toLowerCase() == "si") {
     const cantidad_hijos = parseInt(prompt("¿Cuantos hijos tiene?"));

      for (let contador = 1; contador <= cantidad_hijos; contador++){
         recargo += precio * 0.2;
         }
        
    }

    const precio_final = precio + recargo;
    
    alert(`${nombre}, el precio final de su seguro mas recargos es de:         
     ${precio_final}`);

};

    let contador_while = 0
    while (true) {
    if (contador_while > 0) {
        const continuar = prompt("¿Desea hacer otra cotizacion? si no desea otra cotizacion escriba salir");
        
     if (continuar.toLowerCase() == "salir") { 
        break;
        }
    }

    cotizacion();
    contador_while += 1;
}


    




