/*
* Dado aleatorio de 6 caras
*/
var numero=parseInt("a");
if(isNaN(numero)) console.log(numero);
var dado1=0;
var dado2=0;
//var max=6;
var min=1;
if((typeof max)!='undefined'){
  for (var i = 0; i < 10; i++) {
     //Un numero aleatorio entre [nim,max] con decimales
    dado1=Math.random() * (max - min) + min;
    //Redondea el numero
    dado1=Math.round(dado1);
    dado2=parseInt(dado1);
    console.log("Dado redondeado con MAth: "+dado1+", por parseInt: "+dado2);
  }
}

alert(i);
