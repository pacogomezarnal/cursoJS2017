function replaceAt(pos,carcaterIn,texto){
  let textTemp=texto.substr(0,pos);
  textTemp=textTemp+carcaterIn;
  textTemp=textTemp+texto.substr(pos+1,(texto.length-1-pos));
  return textTemp;
}
var texto="0000000000";
texto=replaceAt(5,'A',texto);
alert(texto);
