//requireds
//const fs = require('fs'); //Librería propía de Node
//const fs = require('express'); expanción de paquetes externos
//const fs = require('./fs'); archivos que hacemos en nuestra máquina

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:` + ` ${archivo}`.green))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}