const fs = require('fs');
let data='';


let ListTable = (base, limit)=>{
    for(let i=1;i<=limit;i++){
        console.log(`${base} *  ${i }= ${base*i}`);
    }
}

let CrearArchivo =  (base,limit)=>{

    return new Promise((resolve,reject)=>{
        if(!Number(base)){
            reject(`${base} isn't a number`);
        } 
    
        for(let i=1;i<=limit;i++){
            data+=`${base } *  ${i }= ${base*i} \n`;
        }
    
        return fs.writeFile(`TABLAS/tabla-${base}.txt`,data, (err)=>{
            if(err) reject(err);
        
            resolve(`file tabla-${base }.txt `);
        });
    });
    
} 


module.exports = {
    CrearArchivo,
    ListTable
}