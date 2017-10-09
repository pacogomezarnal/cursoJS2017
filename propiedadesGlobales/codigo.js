//esta funcion ejecuta un ejemplo de infinito
  function lanzarInfinito(){
    console.log("----- EJEMPLO INIFINITO -----");
    alert("----- EJEMPLO INFINITO -----");
    console.log(Infinity); /* Infinity */
    alert(Infinity);
    var muuGrande=Math.pow(10, 1000);
    console.log(muuGrande); /* Infinity */
    alert(1/muuGrande); /* 0 */
  }

  //esta funcion ejecuta un ejemplo resultado no es un numero
    function lanzarNaN(){
      console.log("----- EJEMPLO NaN -----");
      alert("----- EJEMPLO NaN -----");
      console.log(parseInt("blabla")); /* NaN */
      alert(parseInt("blabla"));
    }

    //esta funcion ejecuta un ejemplo resultado undefined
      function lanzarUndefined(){
        console.log("----- EJEMPLO undefined -----");
        alert("----- EJEMPLO undefined -----");
        console.log(typeof sinDefinir); /* undefined */
        alert(typeof sinDefinir);
      }
    //esta funcion ejecuta un ejemplo resultado undefined
        function lanzarNull(){
          console.log("----- EJEMPLO null -----");
          alert("----- EJEMPLO null -----");
          var sinValor=null;
          console.log(sinValor); /* undefined */
          alert(sinValor);
      }
