//spread operator
let kissEmoji = [..."๐ฉโโค๏ธโ๐โ๐ฉ"]
console.log(kissEmoji)

let familyEmoji = [..."๐จโ๐ฉโ๐ฆโ๐ฆ"]
console.log(familyEmoji)

console.log('๐ฉโโค๏ธโ๐โ๐ฉ');

let person = {
    name : 'Felipe',
    age : '26',
    profession : 'Web Developer'
}

let country = 'COL';

let data = {id:12, ...person, country};

console.log(data);

let nums = [23,42,23,2,5,2365,2342,36,45,4567,43];

let nums2 = [...nums, 1312, 123, 12312,124,12,12];

console.log(nums2)

//rest parameters

function sumar(num, ...values){
    console.log(values);
    console.log(num + values[1]);
}

sumar(12,23,423,52,32,23,235,23);

function solution(
    json1 = {
    name: "Mr. Michi",
    food: "Pescado"
  }, json2 = {
    age: 12,
    color: "Blanco"
    }
  ) {
    return {...json1,...json2}// Tu cรณdigo aquรญ ๐
  }
  
  solution({
    name: "Bigotes",
    food: "Pollito"
})
