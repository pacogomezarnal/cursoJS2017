/*
Enunciado
1 Solicitar dos números pares al usuario
2 Comprobar que:
    Los dos números sean distintos
    Ambos números sean pares
    Si no lo son volver a preguntar
*/
//Inicializacion
var numeroUsuario1="a";
var cadenaUsuario1="a";
var cadenaUsuario2="b";
var numeroUsuario2="b";

//Solicitar dos numeros pares
while (
isNaN(numeroUsuario1)
||isNaN(numeroUsuario2)
||(numeroUsuario1==numeroUsuario2)
||(numeroUsuario1%2!=0)
||(numeroUsuario2%2!=0)
)
{
  cadenaUsuario1=prompt("Dame el primer numero par");
  numeroUsuario1=parseInt(cadenaUsuario1);
  cadenaUsuario2=prompt("Dame el segundo numero par");
  numeroUsuario2=parseInt(cadenaUsuario2);
  console.log(numeroUsuario1);
  console.log(numeroUsuario2);
}
console.log("SON PARES");
