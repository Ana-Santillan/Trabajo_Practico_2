/*
Realizar una página con un script que calcule el valor de la letra de un número
de DNI (Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :
El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
Si lo introducido no es un número deberá indicarse con un alert y volver a
preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
*/

let vueltas = 0;

do{
    let num = prompt("Ingrese un número");
    if(isNaN(num)){
        alert("Ingrese un número válido");
    }
    if(num >= 0 && num <= 99999999){
        num = Number(num);
        if(num % 23 === 0){
            document.write("T");
        }
        if(num % 23 === 1){
            document.write("R");
        }
        if(num % 23 === 2){
            document.write("W");
        }
        if(num % 23 === 3){
            document.write("A");
        }
        if(num % 23 === 4){
            document.write("G");
        }
        if(num % 23 === 5){
            document.write("M");
        }
        if(num % 23 === 6){
            document.write("Y");
        }
        if(num % 23 === 7){
            document.write("F");
        }
        if(num % 23 === 8){
            document.write("P");
        }
        if(num % 23 === 9){
            document.write("D");
        }
        if(num % 23 === 10){
            document.write("X");
        }
        if(num % 23 === 11){
            document.write("B");
        }
        if(num % 23 === 12){
            document.write("N");
        }
        if(num % 23 === 13){
            document.write("J");
        }
        if(num % 23 === 14){
            document.write("Z");
        }
        if(num % 23 === 15){
            document.write("S");
        }
        if(num % 23 === 16){
            document.write("Q");
        }
        if(num % 23 === 17){
            document.write("V");
        }
        if(num % 23 === 18){
            document.write("H");
        }
        if(num % 23 === 19){
            document.write("L");
        }
        if(num % 23 === 20){
            document.write("C");
        }
        if(num % 23 === 21){
            document.write("K");
        }
        if(num % 23 === 22){
            document.write("E");
        }
    } else{
        document.write("El número debe estar entre 0 y 99999999")
    }
    vueltas++;
}while(confirm("¿Quiere ingresar otro numero?"))