//esta funcion ejecuta un ejemplo de la estructura do while
  function lanzarEjemploDoWhile(){
    console.log("----- EJEMPLO DO WHILE -----");
    alert("----- EJEMPLO DO WHILE -----");
    var i=0;
    do {
      i += 1;
      console.log("El valor de i es "+i);
      alert("El valor de i es "+i);
    } while (i < 5);
  }

  //esta funcion ejecuta un ejemplo de la estructura while
  function lanzarEjemploWhile(){
    console.log("----- EJEMPLO WHILE -----");
    alert("----- EJEMPLO WHILE -----");
    var n = 0;
    var x = 0;
    while (n < 3) {
      n++;
      x += n;
      console.log("El valor de n es "+n);
      alert("El valor de n es "+n);
      console.log("El valor de x es "+x);
      alert("El valor de x es "+x);
    }
  }

  //esta funcion ejecuta un ejemplo de la estructura for
  function lanzarEjemploFor(){
    console.log("----- EJEMPLO FOR -----");
    alert("----- EJEMPLO FOR -----");
    for (var i = 0; i < 10; i++) {
      console.log("El valor de i es "+i);
      alert("El valor de i es "+i);
    }
  }
