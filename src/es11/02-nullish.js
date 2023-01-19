const anotherNumber = 1;
const validate = anotherNumber ?? 5;
console.log(validate)

const nullValue = null;
//Si nullValue es null o undefined se asigna un valor de 10
const validateNull = nullValue ?? 10;
console.log(validateNull)

let hola;

let chao = 'Adios'

console.log(hola ?? chao);
