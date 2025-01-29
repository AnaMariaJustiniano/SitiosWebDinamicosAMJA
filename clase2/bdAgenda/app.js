const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true })); //para poder leer los datos del formulario
app.set('view engine', 'ejs');//condiguración del motor de plantillas
app.use(express.static('public'));//para poder acceder a los archivos estáticos

app.get('/', (req, res) => {
    res.sendFile('bienvenido.html',{root:__dirname+'/public'});
}); 
app.get('/listar', (req, res) => {
    db.query('SELECT * FROM agenda', (error, agenda) => {
        if (error) {
            console.log('Error al consultar los datos');
            return;
        }
        res.render('listar', { agenda });
    });
});

app.listen(3000, () => {
    console.log(`Servidor corriendo en http://localhost:${port}/`);
});

