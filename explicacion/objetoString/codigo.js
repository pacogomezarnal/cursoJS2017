//Definición de una frase
var parrafoLargo="   Este es un ejemplo \
de un parrafo super largo \
con mucho texto  ";

console.log(parrafoLargo);
var parrafoTwitter=parrafoLargo.trim();
//Cabe en twitter?
if(parrafoTwitter.length<140){
  console.log(parrafoTwitter);
  console.log("CABE EN TWITTER!!");
}

//Sacar la 3ª letra de parrafoLargo de twitter
console.log(parrafoTwitter.charAt(2));

//Darle la vuelta a la frase
var parrafoTwitterVuelta="";
for (var i = parrafoTwitter.length-1; i >=0; i--) {
  parrafoTwitterVuelta=parrafoTwitterVuelta+parrafoTwitter.charAt(i);
}
console.log(parrafoTwitterVuelta);
