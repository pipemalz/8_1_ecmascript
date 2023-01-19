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


const days = ['Lunes dia de sol', 'Martes dia del semaforo', 'Miercoles pa dormir', 'Jueves bebiendo hasta la lluvia', 'Viernes pa mi cuerpo', 'Sabado disfruton', 'Domingo de exequias funebres'];

const[lunes, martes, miercoles, jueves] = days;


console.log(`Voy al gimnasio los ${lunes} y ${miercoles}`);