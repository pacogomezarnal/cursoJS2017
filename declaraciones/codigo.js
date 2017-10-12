//esta funcion ejecuta un ejemplo de var
  function lanzarVar(){
    console.log("----- EJEMPLO VAR -----");
    alert("----- EJEMPLO VAR -----");
    variable=3;
    var variable;
    alert("El valor de variable es"+variable);
  }

  //esta funcion ejecuta un ejemplo de let
    function lanzarLet(){
      console.log("----- EJEMPLO LET -----");
      alert("----- EJEMPLO LET -----");
      for (let i = 0; i<10; i++) {
        alert("Variable local i: "+i); // 0, 1, 2, 3, 4 ... 9
      }
      alert("Variable fuera de su ambito: "+i); // i is not defined
    }

    //esta funcion ejecuta un ejemplo de const
      function lanzarConst(){
        console.log("----- EJEMPLO CONST -----");
        alert("----- EJEMPLO CONST -----");
        // definimos PI como constante
        const PI = 3.14;
        // lanzara un error
        PI = 3;
        // imprimira PI
        alert(PI);
      }
