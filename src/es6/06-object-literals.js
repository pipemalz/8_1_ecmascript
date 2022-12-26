//Enhanced object literals
function newUser(user,age,country,Uid){
    //Como se hacia antes
    // return {
    //     user : user,
    //     age : age,
    //     country : country
    // }
    //Como se haría con EMASCRIPT V6+, cuando el nombre de la propiedad es igual al nombre de la variable que contiene el valor
    return {
        user,
        age,
        country,
        id : Uid
    }
}

const user = newUser('user001', 20, 'SWE', '03012');

console.log(user);
