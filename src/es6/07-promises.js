const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey lo logramos')
        }else{
            reject('No lo logramos jajaja');
        }
    });
};
anotherFunction()
    .then(response => console.log(response))
    .catch(error => console.log(error));

const sumar = (dato1,dato2) => {
    return new Promise((resolve, reject) => {
        if(dato1 && dato2){
            setTimeout(()=>{
                resolve(`El resultado de sumar ${dato1} y ${dato2} es ${dato1 + dato2}`);
            }, 2000);
        }else{
            reject('No hay datos suficientes para realizar la operación.');
        };
    });
}

// function sumar(dato1, dato2){
//     return new Promise((resolve, reject) => {
//         if(dato1 && dato2){
//             setTimeout(()=>{
//                 resolve(`El resultado de sumar ${dato1} y ${dato2} es ${dato1 + dato2}`);
//             }, 2000);
//         }else{
//             reject('No hay datos suficientes para realizar la operación.');
//         };
//     });
// }

sumar(20, 20)
    .then(res => {
        console.log(res);
        console.log('Operación realizada con éxito.');
    })
    .catch(error => console.error(error));

