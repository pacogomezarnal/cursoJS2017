//esta funcion crea un objeto Date
  function crearDate(){
    console.log("----- EJEMPLO DATE -----");
    alert("----- EJEMPLO DATE -----");
    var fecha=new Date(); //nueva fecha
    var fechaAyer=new Date(2017,10,17); //nueva fecha
    alert("La fecha de hoy es: "+fecha);
    alert("La fecha de ayer es: "+fechaAyer);
  }
  //esta funcion utiliza los getters
    function getterDate(){
      console.log("----- EJEMPLO DATE -----");
      alert("----- EJEMPLO DATE -----");
      var fechaAyer=new Date(2017,10,17); //nueva fecha
      alert("El dia es: "+fechaAyer.getDate());
      alert("El año fue"+fechaAyer.getFullYear());
    }

    //esta funcion utiliza los setters
      function setterDate(){
        console.log("----- EJEMPLO DATE -----");
        alert("----- EJEMPLO DATE -----");
        var fechaAyer=new Date(2017,10,17); //nueva fecha
        alert("El año fue antes de cambiarlo: "+fechaAyer.getFullYear());
        fechaAyer.setFullYear(2016);
        alert("El año fue después de cambiarlo: "+fechaAyer.getFullYear());
      }
