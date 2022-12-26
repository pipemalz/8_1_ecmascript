//spread operator
let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)

console.log('👩‍❤️‍💋‍👩');

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
