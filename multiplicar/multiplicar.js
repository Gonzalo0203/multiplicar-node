const fs = require('fs'); //Librería propía de Node
const colors = require('colors');


let listarTabla = (base, limite = 10) => {
    console.log('================'.green);
    console.log(`Tabla del ${base}`.green);
    console.log('================'.green);
    for (let j = 1; j <= limite; j++) {
        console.log(`${base} * ${j} = ${base * j}`.green);
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base}, no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}