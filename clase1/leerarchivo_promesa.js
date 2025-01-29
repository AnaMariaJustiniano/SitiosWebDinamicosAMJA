const fs=require('fs');
fs.promises.readFile('miarchivo.txt','utf-8')
    .then((data)=>{
        console.log(data);
   })
    .catch((err)=>{
        console.error(err);
    });