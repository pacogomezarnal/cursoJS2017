//Inicializacion de fechas
var fechaHoy=new Date();
var fechaCumplePaco=new Date(2018,1,25);

//Muestro el dia de hoy
console.log(fechaHoy);
console.log(fechaCumplePaco);
console.log("Paco cumple el dia: "+fechaCumplePaco.getDate());

//Dia de la semana
console.log("Dia de la semana: "+fechaCumplePaco.getDay());
switch (fechaCumplePaco.getDay()) {
  case 0:
    console.log("Dia de la semana: Domingo");
    break;
  case 1:
    console.log("Dia de la semana: Lunes");
    break;
  case 2:
    console.log("Dia de la semana: Martes");
    break;
  default:
    console.log("Dia de la semana: ERROR");
    break;
}
fechaCumplePaco.setFullYear(2019);
switch (fechaCumplePaco.getDay()) {
  case 0:
    console.log("Dia de la semana: Domingo");
    break;
  case 1:
    console.log("Dia de la semana: Lunes");
    break;
  case 2:
    console.log("Dia de la semana: Martes");
    break;
  default:
    console.log("Dia de la semana: ERROR");
    break;
}
