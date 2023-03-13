/*
Realiza un script que pida por teclado 3 edades y 3 nombres e indique el
nombre del mayor. *
Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/

const edad1 = parseInt(prompt("Ingrese la primer edad"));
const nombre1 = prompt("Ingrese el primer nombre");
const edad2 = parseInt(prompt("Ingrese la segunda edad"));
const nombre2 = prompt("Ingrese el segundo nombre");
const edad3 = parseInt(prompt("Ingrese la tercer edad"));
const nombre3 = prompt("Ingrese el tercer nombre");

let mayor = "";

if(Math.max(edad1, edad2, edad3)=== edad1){
    mayor = nombre1;
} else if(Math.max(edad1, edad2, edad3)=== edad2){
    mayor = nombre2;
} else{
    mayor = nombre3;
}

document.write(`El mayor es: ${mayor}`);