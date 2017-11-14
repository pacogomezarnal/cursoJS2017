/*
Enunciado

Solicitar una frase al usuario
Mediante el uso de las funciones del objeto String, sacar por console.log cuantas vocales tiene
Ejemplo:

frase de entrada="Paco usa JS";

salida--> 2 a, 0 e, 0 i, 1 o, 1 u
*/

//Inicializar
var contA,contE,contI,contO,contU=0;
var fraseUsuario="";

//Pedir al usuario una frase
fraseUsuario=prompt("Introduce una frase","");

if(fraseUsuario.length>0){

}else{
  console.log("No se ha introducido ninguna frase");
}
