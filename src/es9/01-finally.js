// const getInfo = edad =>{
//     return new Promise((resolve, reject) =>{
//         if(edad >= 18){
//             resolve('Pase entregado');
//         }else{
//             reject('No cumple la edad minima');
//         }
//     });
// }

// getInfo(15)
//     .then(res => console.log(res))
//     .catch(error => console.log(`Error: ${error}`))
//     .finally(()=> console.log('Proceso terminado'));

//ITERACIONES (GENERATORS)

async function* generator() {
  let i = 0;
  while (true) {
    yield Promise.resolve(i);
    i++;
  }
}

const other = generator();

other.next().then((res) => console.log(res.value));
other.next().then((res) => console.log(res.value));
other.next().then((res) => console.log(res.value));
other.next().then((res) => console.log(res.value));
other.next().then((res) => console.log(res.value));

async function namesGen(array) {
  for await (let value of array) {
    console.log(value);
  }
}

namesGen(["Camilo", "Eduardo", "Magnolia", "Gonzalo", "Messi"]);

console.log("After");
