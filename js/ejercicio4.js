/*
Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con
“cancelar” deberá indicarse la suma total de los números introducidos.
*/

let suma = 0;
let vueltas = 0;

do{
    let num = prompt("Ingrese un número");
    if(isNaN(num)){
        alert("Ingrese un número");
    }
    num = Number(num);
    suma +=num;
    vueltas++;
}while(confirm("¿Quiere ingresar otro numero?"))

document.write(`La suma de los números ingresados es: ${suma}`);