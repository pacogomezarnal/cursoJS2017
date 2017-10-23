//creacion de un array
var personas=["Josep","Roberto","Sergio"];
var cosas=["Paco",4,true];
var modulos=Array("Programacion","BBDD","LLMM");
var futurasNotas=Array(modulos.length);
//mostramos los arrays
console.log(cosas);
console.log(futurasNotas);
//Accedemos a los elementos de los arrays
console.log(modulos[1]);
console.log(futurasNotas[2]);
var persona=personas[personas.length-1];
console.log(persona);
//Modificar un elemento
futurasNotas[0]=2.4;
console.log(futurasNotas);
//Añadimos y eleminamos un elemento
var nombreModuloIngles="Inglés";
modulos.push("ED",nombreModuloIngles,"Otro");
console.log(modulos);
//Eliminamos elementos
modulos.pop();
console.log(modulos);
//Recorrer un array
for (var i = 0; i < modulos.length; i++) {
  console.log("Modulo "+i+" "+modulos[i]);
}
