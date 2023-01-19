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
                console.log(`El resultado de sumar ${dato1} y ${dato2} es ${dato1 + dato2}`)
                resolve(multiplicar(dato1, dato2));
            }, 2000);
        }else{
            reject('No hay datos suficientes para realizar la operación.');
        };
    });
}

const multiplicar = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if(num1 && num2){
            setTimeout(()=>{
                resolve(`El resultado de la multiplicar ${num1} x ${num2} es ${num1 * num2}`);
            }, 2000)
        }
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

sumar(20, 20).then(res => res).then(res => {
        console.log(res);
        setTimeout(()=>{
            console.log('Operación realizada con éxito.');
        }, 2000);
    })
    .catch(error => console.error(error));



    const datos = [
        {
            id : 1,
            title : 'Iron Man',
            year : 2008
        },
        {
            id : 2,
            title : 'Spiderman: Homecoming',
            year : 2008
        },
        {
            id : 3,
            title : 'Avengers: Endgame',
            year : 2008
        }
    ]
    
    // const datos = false;
    
    const mostrar = () => {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
               if(datos){
                    resolve(datos);
               }else{
                   reject('No se encontraron los datos');
               }
            }, 2000) 
        });
    }
    
    mostrar()
        .then(res => console.log(res))
        .catch(error => console.log(error))


function resolver(num){
    return new Promise((resolve, reject) => {
        if(num > 10){
            resolve('Exito en la operacion');
        }else{
            reject('Operacion fallida');
        }
    })
}

resolver(11)
    .then((res) => {
        console.log(res);
    })
    .catch((error)=> {
        console.log(error);
    })