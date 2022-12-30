const lista = new Set();

lista.add('item1');
lista.add('item2').add('item3')

console.log(lista)

const array = [1, 1, 2, 2, 3, 4, 4, 5]

const sinRepetidos = [ ... new Set(array)]
console.log(sinRepetidos) // [ 1, 2, 3, 4, 5 ]

const hola = [...new Set('HOLA')]
console.log(hola);


// function solution(str, ending){
//     let last = str.substr((str.length)-ending.length, ending.length);
//     return ending == last;
// }
function solution(str, ending){
    return str.endsWith(ending)
}


console.log(solution('execution', 'tion'));