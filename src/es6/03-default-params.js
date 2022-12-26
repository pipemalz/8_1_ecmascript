 function crearUsuario(nombre, edad, pais){
    var nombre = nombre || 'Felipe';
    var edad = edad || 20;
    var pais = pais || 'Colombia';
    console.log(nombre, edad, pais);
}

crearUsuario();
crearUsuario('Carlos', 30, 'Venezuela');


//Default Parameters ES6
function crearAdmin (nombre='John', edad='26', pais='Australia'){
    console.log(nombre, edad, pais);
}

crearAdmin();
crearAdmin('Monica', 40, 'Honduras');