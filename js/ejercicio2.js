/*
Escribir un programa que solicite una nota (número) de 0 a 10. Luego mostrar
la calificación en un alert según los siguientes rangos de nota:
0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente
Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje
de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje
“Introduce un número válido”.
*/

const nota = prompt("Ingrese una nota del 0 al 10");

if(isNaN(nota)){
    document.write("Ingrese una nota válida");
} else if(nota < 0 || nota > 10){
    document.write("La nota debe estar entre 0 y 10");
} else if(nota >= 0 && nota <= 2){
    alert("La nota es muy deficiente");
} else if(nota >= 3 && nota <= 4){
    alert("La nota es insuficiente");
} else if(nota >= 5 && nota <= 6){
    alert("La nota es suficiente");
} else if(nota == 7){
    alert("La nota esta bien");
} else if(nota >= 8 && nota <= 9){
    alert("La nota es notable");
} else if(nota == 10){
    alert("La nota es sobresaliente");
}