//Declaration
class User{
    //constructor
    constructor(name, age){
        //this
        this.name = name;
        this.age = age;
        //executes when the instance is created (const newUser = new User())
        console.log('New User');
    }
    //methods
    greeting(){
        console.log('Hello world');
    }
    speak(){
        return 'Goodbye';
    }
    goodbye(){
        return `${this.speak()}, ${this.name}.`
    }

    //getters
    get userName(){
        return this.name;
    }
    get userAge(){
        return this.age;
    }
    //setters
    set userName(name){
        this.name = name;
    }
    set userAge(age){
        this.age = age;
    }
};

//Class (object) instance
const newUser = new User();

//Calling methods
newUser.greeting();

//Another instance
const anotherUser = new User('Felipe');
anotherUser.greeting();
console.log(anotherUser.goodbye());

//execute getter
console.log(anotherUser.userName);

//execute setter
console.log(anotherUser.userName = 'Camilo');