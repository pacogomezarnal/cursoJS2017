/*
Enunciado

Solicitar una frase al usuario
Mediante el uso de las funciones del objeto String, sacar por console.log cuantas vocales tiene
Ejemplo:

frase de entrada="Paco usa JS";

salida--> 2 a, 0 e, 0 i, 1 o, 1 u
*/

//Inicializar
var contA=0;
var contE=0;
var contI=0;
var contO=0;
var contU=0;
var fraseUsuario="";

//Pedir al usuario una frase
fraseUsuario=prompt("Introduce una frase","");

if(fraseUsuario.length>0){
  for (var contador = 0; contador < fraseUsuario.length; contador++) {
    switch (fraseUsuario.charAt(contador)) {
      case 'a':
        contA++;
        break;
      case 'e':
        contE++;
        break;
      case 'i':
        contI++;
        break;
      case 'o':
        contO++;
        break;
      case 'u':
        contU++;
        break;
      default:
    }
  }
  console.log(fraseUsuario);
  console.log(contA+" a,"+contE+" e,"+contI+" i,"+contO+" o,"+contU+" u");
}else{
    console.log("No se ha introducido ninguna frase");
}
