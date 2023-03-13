/*
Realiza un script que cuente el número de vocales que tiene un texto.
*/

const text = prompt("Ingrese un texto");

let contador = 0;

for (let i = 0; i < text.length; i++) {
    const letra = text.charAt(i);
    if ("aeiouAEIOU".includes(letra)) {
        contador ++;
    }
}

document.write(`La cantidad de vocales en la frase "${text}" es: ${contador}`);