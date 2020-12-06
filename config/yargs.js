
const opt= {
    base:{
        require:true,
        alias: 'b',

    },
    limit:{
        alias:'l',
        default:10,
        description:'limite de la tabla'
    }
}


const argv = require('yargs')
                            .command('list','Print table',opt)
                            .command('create','Generate File',opt)
                            .help()
                            .argv



module.exports = {
    argv
}

