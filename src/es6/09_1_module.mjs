const obj = {
    name: 'John',
    age: Math.floor(Math.random() * 30) + 20,
    hobbies: ['reading', 'cooking', 'hiking'],
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY'
    }
  };

const myFun = () => {
    console.log('Hello', obj);
}

export default myFun;