const {CrearArchivo, ListTable} = require('../03-BASE_NODE/multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

// console.log(argv)
let command = argv._[0];


switch(command){
    case 'list':
        ListTable(argv.base,argv.limit);
        break;
    case 'create':
        CrearArchivo(argv.base,argv.limit)
            .then( file=> console.log(`File Create `, colors.green(file)))
            .catch((err)=>{
                return console.log(err);
            });

        break;
    default :
    console.log('unreconocide command');
        break;

}
// let parametro = argv[2];
// let base = parametro.split('=')[1];

//console.log(module);


// console.log(process)