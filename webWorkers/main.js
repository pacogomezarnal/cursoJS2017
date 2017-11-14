//Nuevo hilo en background
var myWorker = new Worker('back.js');
var resultado=0;
myWorker.postMessage([5,2]);

myWorker.onmessage = function(e) {
  resultado=e.data;
  console.log('Resultado es: '+resultado);
  myWorker.terminate();
}
