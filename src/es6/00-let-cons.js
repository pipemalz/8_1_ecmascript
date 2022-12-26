var stringvar = 'Felipe';
stringvar = 'Carlos';
console.log(stringvar);

let fruit = 'Apple';
fruit = 'Orange';
console.log(fruit);

var stringvar = 'tomato';
console.log(stringvar)

const constant = 'Never change me';

const fruits = () => {
    if(true){
        var fruit1 = 'apple';
        let fruit2 = 'kiwi';
        const fruit3 = 'banana';
    }
    console.log(fruit1, //Function scoope
        // fruit2, //Block scoope
        // fruit3); //Block scoope
    );
}

fruits();