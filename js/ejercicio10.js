/*
Realiza un script que pida número de filas y columnas y escriba una tabla.
Dentro de cada una de las celdas deberá escribirse un número consecutivo en
orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
 */

const filas = prompt("Ingrese el numero de filas");
const columnas = prompt("Ingrese el numero de columnas");
let resultado = filas * columnas;
document.write("<table><tbody>")

for(let indiceFilas=0; indiceFilas < filas; indiceFilas++){
    document.write("<tr>")
    for(let indiceColumnas=0; indiceColumnas < columnas; indiceColumnas++){
        document.write(`<td>${resultado}</td>`);
        resultado = resultado - 1;
    }
    document.write("</tr>");
}
document.write("</tbody></table>")