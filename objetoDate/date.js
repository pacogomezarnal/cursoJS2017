console.log("----- EJEMPLO DATE -----");
alert("----- EJEMPLO DATE -----");
var fecha=new Date(); //nueva fecha
var fechaAyer=new Date(2017,10,17); //nueva fecha
alert("La fecha de hoy es: "+fecha);
alert("La fecha de ayer es: "+fechaAyer);
console.log("----- EJEMPLO DATE -----");
alert("----- EJEMPLO DATE -----");
var fechaAyer=new Date(2017,10,17); //nueva fecha
alert("El dia es: "+fechaAyer.getDate());
alert("El año fue"+fechaAyer.getFullYear());
console.log("----- EJEMPLO DATE -----");
alert("----- EJEMPLO DATE -----");
var fechaAyer=new Date(2017,10,17); //nueva fecha
alert("El año fue antes de cambiarlo: "+fechaAyer.getFullYear());
fechaAyer.setFullYear(2016);
alert("El año fue después de cambiarlo: "+fechaAyer.getFullYear());
