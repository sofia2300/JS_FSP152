/* Variables: Sirve para pasarle información y que la procese */ 

edad= 25; 
nombre = "Juan";
var apellido = "Pérez";
let ciudad = "Madrid"; /* Let se usa SIEMPRE y es una forma de cargar una variable. Es la forma más usada. La palabra "Madrid" es una cadena de texto. ES PARA DECLARAR UNA VARIABLE */

let datos ; /* Poniendole nombre */
datos = 354; /*Inicializando la variable. Dandole valor. Recordar poner ";" siempre */
/* Las variables son en memoria */

console.log(edad); /*Se puede ejecutar a traves del navegador o atraves del motor del plugin que instalamos*/
console.log(nombre);

console.log(`este es el apellido: ${apellido}`); /*Interpoblación: Colocar entre cadenas de texto unas variables. Esta forma es muy util con comillas invertidas*/
console.log("nombre", nombre) /*Igual es una forma de nombrarlo, entre comas"*/
