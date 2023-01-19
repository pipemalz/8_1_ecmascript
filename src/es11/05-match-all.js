//Contraseña que debe tener al menos una mayuscula, al menos una minuscula, al menos un simbolo (*.-%$#@!&) y minimo 10 caracteres en total.

const regEx = /(Apple)+/g;

const fruit =
  "Apple, banana, kiwi sandia, maracuya, Apple, Pineapple, Green Apple, etc..";

console.log(fruit.match(regEx));

for (const match of fruit.matchAll(regEx)) {
  console.log(match);
}
