// FUNCIONES

function saludar () {
    console.log("Prueba de function")
}

saludar();
saludar();
saludar();
saludar();   /*se llama a la funcion para que se ejecute, en este tipo de funcion
los parentesis estan vacios, cuando esta lleno, se llama parametro*/


function saludarPersona (mensaje) {
    console.log("¡"  + mensaje + "!");
}

saludarPersona("mensaje uno");
saludarPersona("mensaje dos");

/* Es recomendable declarar la function antes de llamar */
/* Es recomendale USAR EL RETURN en las FUNCTION,
no con la consola dentro, como esta arriba */

// Funcion con parametro
// Función flecha: es más facil