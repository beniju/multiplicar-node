const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let command = argv._[0];

switch (command) {
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(`Archivo creado: ${archivo}`);
        }).catch(err => {
            console.log(`Error: ${err}`);
        });
        break;
    case 'listar':
        console.log("=========================".green);
        console.log(`====== Tabla del ${argv.base} ======\n`.green);
       
        listarTabla(argv.base, argv.limite).then(tabla => {
            console.log(`${tabla}`);
            console.log("=========================".green);
        }).catch(err => {
            console.log(`Error: ${err}`);
        });
        break;
    default:
        console.log('Comando desconocido');
        break;
}
