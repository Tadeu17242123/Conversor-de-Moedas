function calcular( ){
var valorEmDolarNumero =document.getElementById('dolar').value

var valorEmReal = valorEmDolarNumero * 5.50
var valorEmRealDecimal = valorEmReal.toFixed(2)
document.getElementById('resultado').innerHTML = 'R$'+' ' + valorEmRealDecimal;
}
