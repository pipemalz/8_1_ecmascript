// const entries = new Map([['Name', 'Oscar'],['Age', 34]]);

// console.log(Object.fromEntries(entries))
// console.log(entries)

const array = [['carlos', 12], ['Maria', 29]];
console.log(Object.fromEntries(array))

//Es el proceso inverso a Object.entries(), que convierte un objeto en una matriz de pares clave-valor.

const obj = {
    carlos : 12,
    Maria : 29
}

const entries = Object.entries(obj)

console.log(entries);

const map = new Map(entries);

console.log(map);
