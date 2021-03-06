const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola tabla de multiplicar', opts)
    .command('crear', 'Crea tabla de multiplicar a partir de la base', opts)
    .help()
    .argv;

module.exports = {
    argv
}