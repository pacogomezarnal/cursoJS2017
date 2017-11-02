/*
Enunciado
Solicitar una frase al usuario
Mediante el uso de las funciones del objeto String, sacar por console.log la frase letra a letra
Ejemplo:

frase de entrada="Paco usa JS";

salida-->

P

a

c

o

....
*/

//Inicializar
var frase="";

frase=prompt("Frase que queremos transformar");
if(frase.length>0){
  for (var i = 0; i < frase.length; i++) {
    console.log(frase.charAt(i));
  }
}else{
  alert("No se ha introducido ninguna frase");
}
