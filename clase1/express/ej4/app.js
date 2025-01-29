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
    res.render('index');
});

//ruta para calcular la suma y mostrar el resultado
app.post('/calcular',(req,res)=>{
    const num1=parseInt(req.body.num1);
    const num2=parseInt(req.body.num2);
    const suma=num1+num2;
    res.render('resultado',{num1,num2,suma});
});
app.listen(port,()=>{
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
                   