let $input_quantidade = document.querySelector("#qt");
let $output_total = document.querySelector("#total");

$input_quantidade.oninput = calculaEMostraTotal;

function calculaEMostraTotal()
{
  let quantidade = $input_quantidade.value;

  let valorUnitarioTexto = document.querySelector("#preco").textContent;
  let valorUnitarioNumero = realParaNumber(valorUnitarioTexto);

  let total = numberParaReal(quantidade * valorUnitarioNumero);
  $output_total.value = total;
}
