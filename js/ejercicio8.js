/*
Crea script para generar pirámide siguiente con los números del 1 al número
que indique el usuario (no mayor de 50)
1 12
123
1234
12345
123456
……
*/

const vueltas = parseInt(prompt("Indique la cantidad de veces a repetir los números"))
if(vueltas > 0 && vueltas <= 50){
    for(let i = 1; i <= vueltas; i++){
        let piramide = "";
        for(let j = 1; j <= i; j++){
            piramide = piramide +j;
        }
        document.write(piramide)
        document.write("<br>")
    }
} else{
    document.write("Debe ingresar un número entre 1 y 50");
}