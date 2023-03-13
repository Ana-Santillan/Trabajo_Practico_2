/*
Realiza un script que cuente el número de vocales que tiene un texto.
*/

const texto = prompt("Ingrese un texto");

let contador = 0;

for (let i = 0; i < texto.length; i++) {
    const letra = texto.charAt(i);
    if ("aeiouAEIOU".includes(letra)) {
        contador ++;
    }
}

document.write(`La cantidad de vocales en la frase "${texto}" es: ${contador}`);