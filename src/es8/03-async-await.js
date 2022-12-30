// const fnAsync = () => {
//     return new Promise((resolve, reject) => {
//         // if(true){
//         //     setTimeout(()=>{resolve('resuelto')}, 4000);
//         // }else{
//         //     setTimeout(()=>{reject('No resuelto')}, 4000);
//         // }   
        
//         true 
//             ? setTimeout(()=>resolve('resuelto'), 4000) 
//             : setTimeout(()=>reject(new Error('Error!')), 4000);
        
//     })
// }

// // fnAsync()
// //     .then(res=> console.log(res))
// //     .catch(error => console.log(error));


// const fnAsync2 = async () => {
//     const something = await fnAsync();
//     console.log(something);
//     console.log('Hello');
// }

// console.log('Before')
// console.log(fnAsync2())
// console.log('After')

const datos = [
    // {
    //     id : 1,
    //     title : 'Iron Man',
    //     year : 2008
    // },
    // {
    //     id : 2,
    //     title : 'Spiderman: Homecoming',
    //     year : 2008
    // },
    // {
    //     id : 3,
    //     title : 'Avengers: Endgame',
    //     year : 2008
    // }
]


const getDatos = () => {
    return new Promise((resolve, reject) =>{
        if(datos.length == 0){
            reject(new Error('No existen datos'));
        }else{
            setTimeout(()=>resolve(datos), 2000);
        }
    })
}

async function fetchingData(){
    try {
        const datosFetched = await getDatos();
        console.log(datosFetched)
    } catch (error){
        console.log(error.message);    
    }
}

fetchingData()

