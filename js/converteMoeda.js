function numberParaReal(numero) {
  let formatado = "R$ " + numero.toFixed(2).replace(".", ",");
  return formatado;
}

function realParaNumber(texto) {
  let compativelComParseFloat = texto.replace("R$ ", "");
  compativelComParseFloat = compativelComParseFloat.replace(",", ".");
  let valor = parseFloat(compativelComParseFloat);
  return valor;
}
