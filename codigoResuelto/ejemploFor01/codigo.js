/*
*Utilizando una estructura for, mostrar por consola los primeros 10 números impares entre dos números solicitados al usuario
*
*/

//En primer lugar pediremos al usuario 2 números, comprobando que son números
var numeroInicialTexto="";
var numeroInicial=0;
var primerNumeroImpar=0;
var numeroFinalTexto="";
var numeroFinal=0;
var numerosBienIntroducidos=false;

while(!numerosBienIntroducidos){
  numeroInicialTexto=prompt("Introduce el numero Inicial");
  numeroInicial=parseInt(numeroInicialTexto);
  numeroFinalTexto=prompt("Introduce el numero Final");
  numeroFinal=parseInt(numeroFinalTexto);
  if(isNaN(numeroInicial)||isNaN(numeroFinal)){
    numerosBienIntroducidos=false;
  }else{
    //Comprobacion de numero final mayor a numero inicial
    if(numeroFinal>numeroInicial) numerosBienIntroducidos=true;
  }
}
//Comprobamos en primer lugar si el primer número es impares
//Mediante el resto de la division por 0
if((numeroInicial%2)==0) {
  primerNumeroImpar=numeroInicial+1;
}else{
    primerNumeroImpar=numeroInicial;
}
//Realizamos el cálculo con ayuda del for
for (var i = primerNumeroImpar; i <= numeroFinal; i=i+2) {
  console.log(i);
}
