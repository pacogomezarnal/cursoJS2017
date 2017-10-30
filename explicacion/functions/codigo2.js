//Control de errores
function msjError(texto){
   console.log("-------ERROR-------");
   console.log(texto);
   console.log("-------------------");
}
//Control de errores
function errorNum(textoNum){
  let num=parseFloat(textoNum);
  if(isNaN(num)){
    msjError("Numero incorrecto en Numero");
    num=0;
  }
  return num;
}
//Definicion de funcion beneficio
function beneficio(compra,venta){
  let compraNum=0;
  let ventaNum=0;
  //Parseado
  compraNum=errorNum(compra);
  ventaNum=errorNum(venta);
  return ventaNum-compraNum;
}

//Usando los beneficios
var compra=prompt("Cual ha sido el precio de compra");
var venta=prompt("Cual ha( sido el precio de venta");
var beneficio = beneficio (compra,venta);
console.log(beneficio);
