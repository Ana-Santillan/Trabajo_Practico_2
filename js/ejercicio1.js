/* Escribir un programa que solicite la edad y si es mayor o igual de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
 */

const edad = prompt("Ingrese una edad: ");

if(isNaN(edad)){
    document.write("Por favor ingresa una edad válida");
} else if(edad >= 18){
    document.write("Ya puede conducir");
} else{
    document.write("Aún no puede conducir");
}

