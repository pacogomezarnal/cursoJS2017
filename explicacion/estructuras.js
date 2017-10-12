var i=1;
console.log("--------- DO WHILE -----");
do {
  i++;
  console.log(i);
} while (i < 1);
i=0;
console.log("--------- WHILE -----");
while (i < 1) {
  i++;
  console.log(i);
}
console.log("--------- 10 primeros pares -----");
i=2;
var contadorNumPares=1;
while (contadorNumPares <= 10) {
  console.log(i);
  i=i+2;
  contadorNumPares++;
}
console.log("--------- 10 primeros pares con for-----");
for (var contadorNumPares = 1; contadorNumPares <= 10; contadorNumPares++) {
  console.log(contadorNumPares*2);
}
