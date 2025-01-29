const express=require('express');
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send('Hola desde Express');
});

app.get('/saludo',(req,res)=>{
    res.send('Buenas noches');
});
app.listen(port,()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
});