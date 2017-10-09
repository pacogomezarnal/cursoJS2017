//esta funcion ejecuta un ejemplo de eval
  function lanzarEval(){
    console.log("----- EJEMPLO EVAL -----");
    alert("----- EJEMPLO EVAL -----");
    var suma=eval("2+3");
    alert("La suma de 2 + 3 es "+suma);
    var x=5;
    var y=3;
    alert("La multiplicación de "+x+" * "+y+" es "+eval("x*y"));
  }
  //esta funcion ejecuta un ejemplo de isNaN
    function lanzarIsNaN(){
      console.log("----- EJEMPLO isNaN -----");
      alert("----- EJEMPLO isNaN -----");
      alert("Una letra no es un numero");
      alert("Resultado de isNaN(a): "+isNaN("f"));
    }
    //esta funcion ejecuta un ejemplo de parse
      function lanzarParse(){
        console.log("----- EJEMPLO parse -----");
        alert("----- EJEMPLO parse -----");
        alert("La conversión de del caracter 2: "+parseInt("2"));
        alert("La conversión de del caracter 0.62: "+parseFloat("0.62"));
    }
