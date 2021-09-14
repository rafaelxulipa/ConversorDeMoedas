function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDollarNumerico = parseFloat(valor);

  var valorEmRealNumerico = valorEmDollarNumerico * 5;
  var valorEmBitcoinNumerico = valorEmDollarNumerico * 0.000022;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmRealNumerico;
  elementoValorConvertido.innerHTML = valorConvertido;

  var elementoValorConvertido2 = document.getElementById("valorConvertido2");
  var valorConvertido2 = "O resultado em Bitcoin é ฿ " + valorEmBitcoinNumerico;
  elementoValorConvertido2.innerHTML = valorConvertido2;
}
