// Retorna un número aleatorio entre min (incluido) y max (excluido)
function ramdomPalabras(min, max) {
  let numerodecimal=Math.random()*(max-min)+min;
  return Math.floor(numerodecimal);
}

var palabras=["capullo","tolay","tontolaba","borinot","merengue"];
var maximoPalabras=palabras.length;
var minPalabras=0;
var palabraElegida=palabras[ramdomPalabras(minPalabras,maximoPalabras)];
console.log(palabraElegida);

//subtituir palabraElegida por 0
var plantilla=new Array (palabraElegida.length);
for (var i = 0; i < plantilla.length; i++) {
  plantilla[i]="0";
}
console.log(plantilla);

var vidas=2;
var letraElegida="";
var letraEncontrada=false;
var numLetrasEncontradas=0;
var salir=false;
while (vidas>0&&(numLetrasEncontradas!=palabraElegida.length)&&(salir==false)) {
  letraElegida=prompt ("Dime una letra, melon!!");
  if (letraElegida=="fin") {
    salir=true;
  }else{
    vidas --;
    for (var i = 0; i < palabraElegida.length; i++) {
      if (palabraElegida.charAt(i)==letraElegida) {
        plantilla[i]=letraElegida;
        letraEncontrada=true;
        numLetrasEncontradas ++;
      }
    }
    if (letraEncontrada==true) {
      vidas++;
      letraEncontrada=false;
    }
    console.log(plantilla);
  }
}
