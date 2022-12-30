const string = 'Hello';

//Quiero agregar a mi string el caracter "." al inicio del mismo hasta que llegue a tener 10 caracteres en total.

console.log(string.padStart(10, '.'));
//Output: ".....Hello"


//Quiero agregar a mi string la palabra "oh" al inicio del mismo hasta que llegue a tener 10 caracteres en total.

console.log(string.padStart(10, 'oh'));
//Output: "ohohoHello"

//Quiero agregar a mi string el caracter "_" al final del mismo hasta que llegue a tener 20 caracteres en total.
console.log(string.padEnd(20, '_'));
//Output: "Hello_______________"