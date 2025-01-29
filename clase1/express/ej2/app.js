const express = require('express');
const app = express();
//Middleware para manejar datos en el formato JSON
app.use(express.json());
//Rutas basicas

app.get('/', (req, res) => {
    res.send('Bienvenido a mi aplicacion express con ej2');

});

app.post('/usuario', (req, res) => {    
    const { nombre, edad } = req.body;	
    res.send(`Usuario creado: ${nombre}, Edad: ${edad}`);
});

//escuchando en el puerto 3000

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});


