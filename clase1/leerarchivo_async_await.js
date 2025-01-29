const fs=require('fs');
async function leerarchivo(){
    try {
        const data=await fs.promises.readFile('MiArchivo.txt','utf-8');
        console.log(data);
    }
        catch(err){
            console.error(err);
        }

}
leerarchivo();
