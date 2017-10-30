//Definimos la funcion
function mensajeParseado(mensaje){
  console.log("MENSAJE IMPORTANTE: "+mensaje);
}

//Usamos la funcion
mensajeParseado("Probando");

//Definimos una funcion que devuelve un valor
function calcularIVA(precioSinIVA){
  return precioSinIVA*1.21;
}

//Usamos la funcion
var precio=0;
var precioConIva=0;
precio=parseFloat(prompt("Dame una cantidad"));
console.log(precio);
precioConIva=calcularIVA(precio);
console.log(precioConIva);

//Definimos una funcion con dos parametros de entrada
//precioSinIVA=float
//IVA=integer sobre 100
function calcularIVA2(precioSinIVA,IVA){
  return precioSinIVA*(1+(IVA/100));
}

//Usamos la funcion
var precio=0;
var precioConIva=0;
precio=parseFloat(prompt("Dame una cantidad"));
console.log(precio);
precioConIva=calcularIVA2(precio,21);
console.log(precioConIva);

//Definimos una funcion con dos parametros de entrada
//precioSinIVA=float
//IVA=integer sobre 100 (por defecto 21%)
function calcularIVA3(precioSinIVA,IVA=21){
  return precioSinIVA*(1+(IVA/100));
}

//Usamos la funcion
var precio=0;
var precioConIva=0;
precio=parseFloat(prompt("Dame una cantidad"));
console.log(precio);
precioConIva=calcularIVA3(precio);
console.log(precioConIva);
