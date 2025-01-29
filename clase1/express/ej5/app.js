const express=require('express');
const app=express();
const port=3000;
//configuramos EJS como motor de plantillas
app.set('views','./views');   
app.set('view engine','ejs');
//Middleware para parsear los datos del formulario
app.use(express.urlencoded({extended:false}));
//Ruta para mostrar el formulario
app.get('/',(req,res)=>{
    const productos = [
        {nombre:'Producto 1', precio:100},
        {nombre:'Producto 2', precio:200},
        {nombre:'Producto 3', precio:300},
        {nombre:'Producto 4', precio:400},
        {nombre:'Producto 5', precio:500},
    ];  
    res.render('index',{productos});
});
app.listen(port,()=>{
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
