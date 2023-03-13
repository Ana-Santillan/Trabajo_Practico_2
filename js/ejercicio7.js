/*
7- Haz un script que escriba una pirámide inversa de los números del 1 al número
que indique el usuario (no mayor de 50) de la siguiente forma : (suponiendo que
indica 30).
303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

const vueltas = parseInt(prompt("Indique la cantidad de veces a repetir los números"))
if(vueltas > 0 && vueltas <= 50){
    for(let i = vueltas; i >=1 ; i--){
        let piramide = "";
        for(let j = i; j >= 1; j--){
            piramide = piramide +i;
        }
        document.write(piramide);
        document.write("<br>");
    }
} else{
    document.write("Debe ingresar un número entre 1 y 50");
}