//Inicializacion
var numeroAleatorio=0;
var numeroUsuario=0;
var numeroTexto="";
var intentos=0;

//Num aleatorio
numeroAleatorio=Math.random() * (10 - 1) + 1;
numeroAleatorio=Math.round(numeroAleatorio);
console.log(numeroAleatorio);

//Bloque de pregunta al usuario
do {
  numeroTexto=prompt("Dime un nunmero entre 1 y 10");
  numeroUsuario=parseInt(numeroTexto);
  intentos++;
  console.log(numeroUsuario);
} while (numeroUsuario!=numeroAleatorio);

//Sacar resultados
var element = document.getElementById("numeroAleatorio");
element.textContent=numeroAleatorio;
var element = document.getElementById("acertado");
element.textContent="HAS ACERTADO";
var element = document.getElementById("numeroIntentos");
element.textContent="Lo has intentado: "+intentos+" veces";
