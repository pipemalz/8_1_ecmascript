//generator
// /Los generadores son funciones especiales que pueden pausar su ejecución, luego volver al punto donde se quedaron, recordando su scope y seguir retornando valores.

function* iterate(array){
    for(let value of array){
        //retornar
        yield value;
    }
}

const it = iterate(['Felipe', 'Camila', 'Paula', 'Marlon', 'Natalia', 'Sara']);

console.log(it.next().value);
console.log('-----------');
console.log(it.next().value);
console.log('-----------');
console.log(it.next().value);
console.log('-----------');
console.log(it.next().value);
console.log('-----------');
console.log(it.next().value);
console.log('-----------');
console.log(it.next().value);

function* getId() {
    const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (let i = 1; i > 0; i++){
      for (const letter in arr) {
        yield i + arr[letter];
      }
    }
  }

const id = getId();
for(let i = 0; i < 1000; i++){
    console.log(id.next().value);
}

