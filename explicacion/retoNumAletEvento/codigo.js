//funcion que comprueba el valor del usuario al hacer click
function comprobar(){
  //Comprobamos que el usuario ha introducido un numero
  numUsuario=parseInt(cajaUsuario.value);
  if(isNaN(numUsuario)){
    cajaMensajes.value="No has introducido nada o no es un número";
    cajaUsuario.value="";
  }else{
    if(numUsuario==numeroAleatorio){
      cajaMensajes.value="ACERTADO";
    }else{
      cajaMensajes.value="SIGUE PROBANDO";
      numIntentos++;
      cajaIntentos.value=numIntentos;
    }
  }

}
//REcogemos todos los elementos que necesitamos del HTML
var cajaUsuario=document.getElementById("cajaEntrada");
var numUsuario=0;
var cajaIntentos=document.getElementById("numIntentos");
var numIntentos=0;
var cajaMensajes=document.getElementById("msj");
//Numero aleatorio
var numeroAleatorio=Math.round(Math.random() * (10 - 1) + 1);
console.log(numeroAleatorio);
