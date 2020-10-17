
const  direccion = {
    alias: 'd',
    desc: 'Dirección de la ciudad para obtener el clima',
    demand: true
}

// * options: poner argumentos en l a raiz de la app sin usar command sino options
// ! se le pasa el json { } con el const del json dentro
const {argv}  = require('yargs').options( {direccion})
                .help();

module.exports = {
    argv
}