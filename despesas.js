const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9],
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0],
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9],
  },
];

var somaReceitas = 0;
var somaDespesas = 0;
var resultado = 0;

function calculaSaldo(receitas, despesas) {
  var somaReceitas = somaNumeros(receitas);
  var somaDespesas = somaNumeros(despesas);
  var resultado = somaReceitas - somaDespesas;

  if (resultado > 0) {
    console.log(`${usuario.nome} tem saldo positivo de ${resultado}`);
  } else {
    console.log(
      `${usuario.nome} tem o saldo negativo de ${resultado.toFixed(2)}`
    );
  }
}

function somaNumeros(numeros) {
  var total = 0;
  var numeros = numeros;
  for (var i = 0; i < numeros.length; i++) {
    total += numeros[i];
  }

  return total;
}

for (usuario of usuarios) {
  calculaSaldo(usuario.receitas, usuario.despesas);
}
