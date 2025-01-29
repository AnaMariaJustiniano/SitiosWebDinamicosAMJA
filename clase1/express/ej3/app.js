const express = require('express');
const app = express();
const port = 3000;
//Middleware para parsear los datos del formulario
app.use(express.urlencoded({ extended: false }));
//ruta para mostrar el formulario
app.get('/', (req, res) => {
    res.send(`
        <form method="POST" action="/calcular">
        <label for="num1">Numero 1:</label>
        <input type="number" name="num1" id="num1">
        <br>
        <label for="num2">Numero 2:</label>
        <input type="number" name="num2" id="num2">
        <br>
        <button type="submit">Calcular suma</button>
        </form>
    `);
});
//ruta para calcular la suma
app.post('/calcular', (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const suma = num1 + num2;
    res.send(`La suma de ${num1} + ${num2} es ${suma}`);
});
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});