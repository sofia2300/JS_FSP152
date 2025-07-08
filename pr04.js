// Dos tipos de variable

let number = 1 //let deja cambiar el valor

const string = "cadena"

const boolean = 123 //number

const array = [1, 2, true, "string", null] //Un array es una lista, un conjunto, puedo tener varios tipos de datos. Los corchetes son para arrays

const nuevoValor = Lista [0]

console.log(nuevoValor) //Es una forma de acceder a una variable.

// console.log(array[0]);

//clave=usualmente son los nombres
//valor= lo que vale

/*Los objetos son algo que abstraigo del mundo
son caracteristicas de algo qu epongo en conjunto
como en el siguiente ejemplo, los objetos nienen nombre
y un valor*/

const sofia = {
    nombre: "sofia",
    apellido: "Rubio",
    edad: 21
}

const nombre = sofia.nombre //en este caso hago una nueva variable para imprimir un dato en especifico.

console.log(nombre)


const carro = {
    color: "blanco",
    tiene_llantas: true,
    gasolina: null,
    matricula: undefine,
    precioDelCarro: 100,
    liquidos: ["aceite", "regrigerante", "frenos", "parabrisas"],
    conductor: {
        nombre: "carlos",
        edad: 34,
        licencia: "C3"
    }
}

console.log(carro.tiene_llantas)

console.log(carro.liquidos[2])

console.log(carro.conductor.nombre)