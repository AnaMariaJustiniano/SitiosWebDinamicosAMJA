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
    db.query('SELECT id, nombre, apellidos, direccion, telefono FROM agenda', (error, agenda) => {
        if (error) {
            console.log('Error al consultar los datos');
            return;
        }
        res.render('listar', { agenda });
    });
});

//Mostrar el formulario para agregar un contacto
app.get('/add', (req, res) => {
    res.render('add');
});
//Guardar el producto en la base de datos

app.post('/add', (req, res) => {
    const { nombre, apellidos, direccion, telefono} = req.body;
    db.query('INSERT INTO agenda (nombre, apellidos, direccion, telefono ) VALUES (?, ?, ?, ?)', [nombre, apellidos, direccion, telefono], (error, resultado) => {
        if (error) {
            console.log('Error al guardar el contacto');
            return;
        }
        res.redirect('/listar');
    });
});
//Mostrar el formulario para editar un contacto
app.get('/editar/:id', (req, res) => {
    const  id  = req.params.id;
    db.query('SELECT * FROM agenda WHERE id = ?', [id], (error, resultado) => {
        if (error) {
            console.log('Error al consultar los datos');
            return;
        }
        res.render('editar', { agenda: resultado[0] });
    });
});
//Actualizar el contacto en la base de datos
app.post('/editar/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, apellidos, direccion, telefono } = req.body;
    db.query('UPDATE agenda SET nombre = ?, apellidos = ?, direccion = ?, telefono = ? WHERE id = ?', [nombre, apellidos, direccion, telefono, id], (error, resultado) => {
        if (error) {
            console.log('Error al actualizar el contacto');
            return;
        }
        res.redirect('/listar');
    });
});
//Eliminar el contacto de la base de datos
app.get('/eliminar/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM agenda WHERE id = ?', [id], (error, resultado) => {
        if (error) {
            console.log('Error al eliminar el contacto');
            return;
        }
        res.redirect('/listar');
    });
});
//Iniciar servidor
app.listen(3000, () => {
    console.log(`Servidor corriendo en http://localhost:${port}/`);
});

