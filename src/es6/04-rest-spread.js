//arrays destructuring

const fruits = ['Apple', 'Banana',['Orange', 'Toronja']];
const [a, b, c] = fruits;
console.log(a, b, c[0]);

//objects destructuring

const objetos = {
    color :'rojo',
    peso : '10kg',
    tamaño : '20cm'
};
const {color, peso, tamaño} = objetos;
console.log(color, peso, tamaño);
