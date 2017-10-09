/*
* Ejemplo sobre bloques
*/

var impares=1;
{
  var pares=0;
}
for (var i = 0; i < 9; i++) {
  impares=impares+2;
  pares=pares+2;
  //alert("impares = "+impares);
}
alert("impares final = "+impares);
alert("pare final = "+pares);
alert("i = "+i);
