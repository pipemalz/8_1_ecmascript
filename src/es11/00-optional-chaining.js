const user = {
    admin : {
        username : 'SysAdm',
        country : 'HU',
        perms : {
            write : true,
            read : true
        }
    },
    guest : {
        username : 'Anonymous',
        country : 'CO',
        perms : {
            write : false,
            read : true
        }
    }
}



console.log(user.admin.avatar?.src?);
//EVITA GENERAR UN ERROR CUANDO NO SE ENCUENTRA LA PROPIEDAD O VALOR ENTREGANDO UN VALOR UNDEFINED EVITANDO ROMPER EL FLUJO