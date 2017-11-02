//Vamos a mostrar el typo de Nodos con name p
var nodosTagP = document.getElementsByTagName('p');
console.log(nodosTagP.length);
for (var i = 0; i < nodosTagP.length; i++) {
  console.log(nodosTagP[i].textContent);
}

//Vamos a mostrar el contenido de uno de los elementos
var nodosIdContenido2 = document.getElementById('contenido2');
console.log(nodosIdContenido2.innerHTML);

//Por último crearemos un nuevo elemento que añadiremos a nuestro documento
var nodosIdContenido3 = document.getElementById('contenido3');
var nuevoElemento=document.createElement("p");
var nuevoTexto=document.createTextNode("Este es el contenido del nuevo párrafo");
nuevoElemento.appendChild(nuevoTexto);
nodosIdContenido3.appendChild(nuevoElemento);
