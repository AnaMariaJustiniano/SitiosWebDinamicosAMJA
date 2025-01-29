const mysql = require('mysql2');
//configuración de la conexión a la base de datos
const conection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'bd_agenda'
}); 
//conectar a la base de datos
conection.connect((error)=>{
    if(error){
        console.log('Error al conectar a la base de datos');
        return;
    }
    console.log('Conexión exitosa a la base de datos');
});
module.exports=conection;