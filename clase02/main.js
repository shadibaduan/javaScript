/*
valores booleanos
true o false

= asignación
== comparación solo de valor
=== comparación tanto de valor como de tipo

Boolean(0) => false
Boolean(-1) => true
Boolean(5) => true
Boolean("") => false
Boolean ("Shadi") => true
*/

/* 
estructura de condición if

if(condición o valor true/false) {
    código a ejecutar cuando el valor o la condicion sea verdadera 
}
*/

/*if (1) {
    console.log("hola");
}

console.log("proceso finalizado");
*/

/*
if ("") {
    console.log("Hola");
}
console.log("proceso finalizado")
*/

/* 
estructura del if else

if(valor o condicion){
    codigo a ejecutar cuando la condicion es verdadera
}else {
    codigo a ejecutar cuando la condicion es falsa
}
*/

/*
let respuesta = prompt("terminaste la tarea?").toLocaleLowerCase;

if (respuesta === "si") {
    alert("puede salir a jugar");
} else {
    alert("no puede salir a jugar");
}

*/

/*
estructura del if else if

if(condicion) {
    codigo a ejecturar cuando la condicion1 es verdadera}else if(condicion2){
        codigo a ejecutar cuando la condicion2 es verdadera}else{
            codigo a ejecutar cuando ninguna de las condiciones es verdadera
        }

*/

//let edad = Number(prompt("Ingrese su edad"));


/*if (edad < 14) {
    alert("No puedes entrar");
}else if (edad <18){
    alert("Puede entrar con un adulto responsable");
}else {
    alert("Puedes entrar a la fiesta ");
}
*/

/*
! ===> cambia el valor de un elemento
valor && valor2 es verdadero cuando ambos valores son verdaderos, en caso contrario es falso
valor1 || valor2 es verdadero cuadno al menos uno de los valores es verdadero, en caso contrario es falso
*/

/*let nombre = prompt("Ingrese el nombre");
let apellido = prompt ("Ingrese el apellido");

if (nombre != "" && apellido != ""); {
    alert("hola" + nombre + " " + apellido);
} else {
    alert("los datos son requeridos");
}*/

/*
let nombre = prompt("Ingrese el nombre");


if (nombre === "ANA" || nombre === "ana") {
    alert("Hola ana");
} else {
    alert("no eres ana");
} 
*/

/*let nombre = prompt("Ingrese el nombre");

if (nombre != "" && (nombre === "EMA" || nombre === "ema")) {
    alert("hola Ema!");
}else {
    alert("nombre no valido");
}*/

/*let nombre = prompt("Ingrese su nombre por favor");
let edad = Number(prompt("Ingrese su edad por favor"));



if (edad >= 18 && edad <= 64 ) {
    alert("hola ," + nombre + " usted es mayor de edad y esta en condicion de trabajar");
}else if (edad >= 65 && edad <= 130) {
    alert("hola ," + nombre + " usted es mayor de edad y está jubilado" )
}else {
    alert("usted es menor de edad, no puede trabajar");
}*/

let numero1 = Number(prompt("Ingrese el primer numero a sumar"));
let numero2 = Number(prompt("Ingrese el segundo numero a sumar"));

let resultado = numero1 + numero2;

alert("El resultado de " + numero1 + " + " + numero2 + " es = " + resultado);