//Control de errores
function msjError(texto){
   console.log("-------ERROR-------");
   console.log(texto);
   console.log("-------------------");
}
//Definicion de funcion beneficio
function beneficio(compra,venta){
  let compraNum=0;
  let ventaNum=0;
  //Parseado
  compraNum=parseFloat(compra);
  if(isNaN(compraNum)){
    msjError("Numero incorrecto en Compra");
    compraNum=0;
  }
  ventaNum=parseFloat(venta);
  if(isNaN(ventaNum)){
    msjError("Numero incorrecto en Venta");
    ventaNum=0;
  }
  return ventaNum-compraNum;
}

//Usando los beneficios
var compra=prompt("Cual ha sido el precio de compra");
var venta=prompt("Cual ha( sido el precio de venta");
var beneficio = beneficio (compra,venta);
console.log(beneficio);
