const fs = require('fs');

/**
 * 
 * @param {Number} base 
 * @param {Number} limite 
 */
let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`"${base}" no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`"${limite}" no es un número`);
            return;
        }
        let data = '';
        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }
        resolve(data);
    });
}

/**
 * 
 * @param {Number} base 
 * @param {Number} limite 
 */
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`"${base}" no es un número`);
            return;
        }
        let data = '';
        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}.txt`);
            }
        })
    });
}

module.exports = {
    listarTabla,
    crearArchivo
}
