/*
Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un
guión -.
Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

*/

let  vueltas = 0;
let mostrarFrases = [];

do{
        let frase = prompt("Ingrese una frase");
        mostrarFrases.push(frase);
        vueltas++;
    }while(confirm("¿Quiere ingresar otra frase?"))

let resultado = mostrarFrases.join("-");
document.write(resultado);