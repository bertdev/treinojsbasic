//algorithm basic for calculate the IMC
// algoritmo basico para calcular imc

const name = "Carlos";
const weight = 84;
const height = 1.88;

var imc = weight / (height * 2);

if (imc >= 30) {
  return console.log(`${name}você está acima do peso`);
} else {
  console.log(`${name}você não está acima do peso`);
}
