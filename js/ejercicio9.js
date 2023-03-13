/*
Crea un script que escriba los números del 1 al 500, que indique cuáles son
múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por
ejemplo :
1
23
4 (Múltiplo de 4)
5-
————————————————————-
67
8 (Múltiplo de 4)
9
*/

for(let num = 1; num <= 500; num++){
    document.write(num);
    if(num % 4 === 0){
        document.write(" - (Múltiplo de 4)");
    }
    if(num % 9 === 0){
        document.write(" - (Múltiplo de 9)");
    }
    document.write("<br>");
    if(num % 5 === 0){
        document.write("<br>")
        document.write("<hr>")
        document.write("<br>")
    }
}