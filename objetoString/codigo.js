//esta funcion ejecuta un ejemplo propiedades
  function lanzarCreacion(){
    console.log("----- EJEMPLO Creacion -----");
    alert("----- EJEMPLO Creacion -----");
    var texto="Esta es una frase";
    var parrafo="Este es un párrafo de\
    múltiples líneas";
    alert(texto);
    alert("La longitud de la variable texto es: "+texto.length);
    alert(parrafo);
    alert("La longitud de la variable parrafo es: "+parrafo.length);
  }
  //esta funcion ejecuta un ejemplo de metodos
    function lanzarMetodos(){
      console.log("----- EJEMPLO METODOS -----");
      alert("----- EJEMPLO METODOS -----");
      var texto="  Esta Es Una Frase  ";
      alert("La frase a analizar es: "+texto);
      alert("La letra de la variable texto que ocupa la posicion 2 es: "+texto.charAt(2));
      alert("La letra de la variable texto que ocupa la posicion 2 es: "+texto.charAt(2));
      alert("La frase convertida a minusculas es: "+texto.toLowerCase());
      var textoMinuscula=texto.toLowerCase();
      alert("La frase convertida a minusculas y eliminados los espacios: "+textoMinuscula.trim());
    }
  //esta funcion ejecuta un ejemplo de metodos
      function lanzarMetodosBusqueda(){
        console.log("----- EJEMPLO METODOS -----");
        alert("----- EJEMPLO METODOS -----");
        var texto="esta es una fras  ";
        alert("La frase a analizar es: "+texto);
        alert("La primera vez que se encuentra la palabra \"es\": "+texto.indexOf("es"));
        alert("Reemplazamos la palabra una por cualquier: "+texto.replace("una","cualquier"));
        alert("Devolvemos el string a partir de la posicion 4: "+texto.substr(4));
      }
