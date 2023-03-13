/*
Realiza un script que muestre la posición de la primera vocal de un texto
introducido por teclado.
*/

const texto = prompt("Ingrese un texto");
const vocales = ["a", "e", "i", "o", "u"];

let posicion = 0;

for (let i = 0; i < texto.length; i++) {
    const letra = texto[i].toLowerCase();
    if (vocales.includes(letra)) {
        posicion = i;
        break;
    }
}

// La primera posicion es 0 por eso para mostrar, a la variable posicion le sume 1
document.write(`La primera vocal de la frase "${texto}" esta en la posicion: ${posicion+1}`);