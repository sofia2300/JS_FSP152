// Ciclo FOR - el más común y versátil

// hay 3 tipos de ciclos: for: x cantidad de veces do...while: no se cuanta veces.

// console.log("\nContando de 2 en 2")
// for {let i=0; i <=10; i +=2} {
//     console.log("par:", i);
// }

// For in con un objeto
const persona = {
    nombre: "Sofia",
    edad: 21,
    ciudad:"Cali",
    profesion: "estudiante",
    
}

for (let clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}

// For In = para arreglos:

const colores = ["amarillo", "blanco", "verde"];

for (let indice in colores) {
    console.log(`${colores}, ${indice[colores]}`)
}

//For Of con array

let frutas = ["manzana", "banana", "mango"];
for (let fruta of frutas) {
    console.log("fruta:", frutas)
}
// Para los arreglos se usa más el for of porque muestra el contenido, con el In muestra el indice. For On también se utiliza con cadenas de texto


// BREAK -Sale del ciclo

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Encontre el 5, salgo del ciclo")
        break;
    }
    console.log("numero:", i);
}

// CONTINUE - Salta a la siguiente interacción
for (let i = 1; i <=5; i++) {

}


// CICLOS ANIDADOS
/* Ciclos dentro de otros,
usualmente se ejecuta el interno y luego el externo */

for (let i = 1; 1<=3; i++) {
    console.log(``)
}

