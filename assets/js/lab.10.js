//DECLARACION DE VARIABLES
let numero1 = 10;
let numero2 = 5;

//OPERACIONES MATEMATICAS
console.log("suma de numero1 + numero2", numero1 + numero2);
console.log("resta de numero1 + numero2", numero1 - numero2);
console.log("multiplicacion de numero1 + numero2", numero1 * numero2);
console.log("divicion d + numero2", numero1 / numero2);

//COMPARACIONES 
console.log("comparar", numero1 == numero2);
console.log("comparar", numero1 != numero2);
console.log("comparar", numero1 > numero2);
console.log("comparar", numero1 >= numero2);
console.log("comparar", numero1 <= numero2);
console.log("comparar", numero1 < numero2);

//OPERACIONES LOGICOS
//DECLARACION DE VARIABLES BOOLEANAS
let esMayorDeEdad = true;
let tieneLicencia = false;

//USO DE OPERADORES AND
let puedeConducir = esMayorDeEdad && tieneLicencia;
console.log("Pude Conducir ", puedeConducir);

//USO DE OPERADOR OR
let Situacion = esMayorDeEdad || tieneLicencia;
console.log("situacion especial", Situacion);

//SALUDO
let saludo = "Hola" + nombre + ". Bienvenido  a Nustro BOOTCAMP";
console.log(saludo);
