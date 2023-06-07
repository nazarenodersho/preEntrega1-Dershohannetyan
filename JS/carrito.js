console.log("Estamos online");

// Carrito de compras de verduleria:

// Bienvenido

function bienvenido() {
    let nombrePregunta;

    while (!nombrePregunta || nombrePregunta === "") {
        nombrePregunta = prompt("Hola usuario! Podrías decirme tu nombre?");
        
        if (!nombrePregunta || nombrePregunta === "") {
            alert("No te presentaste, intenta nuevamente");
        } else {
            alert("Bienvenido " + nombrePregunta);
            console.log("Este es el nombre del usuario: " + nombrePregunta);
        }
    }
}

bienvenido();

// Productos:

function productos(){
    alert("Las verduras que tenemos son las siguientes: tomate $300/kg, papa $200/kg, cebolla $250kg, zanahoria $280/kg");
}

productos();

// Calculadora de la compra

function calcularSuma() {
    let tomate = 300;
    let papa = 200;
    let cebolla = 250;
    let zanahoria = 280;
    
    let suma = 0;
    
    let elegir = prompt("Escribe las verduras que quieras: tomate, papa, cebolla o zanahoria");

    console.log("Opción ingresada por el usuario:", elegir);
  
    if (elegir.includes("tomate")) {
      suma += tomate;
      console.log("Valor de tomate:", tomate);
    }
    if (elegir.includes("papa")) {
      suma += papa;
      console.log("Valor de papa:", papa);
    }
    if (elegir.includes("cebolla")) {
      suma += cebolla;
      console.log("Valor de cebolla:", cebolla);
    }
    if (elegir.includes("zanahoria")) {
      suma += zanahoria;
      console.log("Valor de zanahoria:", zanahoria);
    }
    
    alert("El precio es: " + suma);
    console.log("El precio es: " + suma);
  }
  
  calcularSuma();
 