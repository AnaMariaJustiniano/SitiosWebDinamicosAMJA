const fs=require('fs');
const data='Esto se escribira en el archivo';
fs.writeFile('MiArchivo.txt',data,(err)=>{
    if(err) throw err;
    console.log('El archivo fue creado con exito');
});