//algorithm to do a basic retirement calculation
// algoritimo para fazer um calculo basico de aposentadoria

const name = "Silvana";
const genre = "F";
const age = 48;
const contribution = 23;

var rule = age + contribution;

if (genre === "F" && contribution > 30) {
  if (rule >= 85) {
    console.log(`${name} você pode se aposentar`);
  }
} else if (genre === "M" && contribution > 35) {
  if (rule >= 95) {
    console.log(`${name} você pode se aposentar`);
  }
} else {
  console.log(`${name} você não pode se aposentar`);
}
