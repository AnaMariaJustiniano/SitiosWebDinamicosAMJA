const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear los datos del formulario
app.use(express.urlencoded({ extended: false }));

// Ruta principal que muestra el formulario
app.get('/', (req, res) => {
    res.send(`
        <form method="POST" action="/calcular">
            <label for="num1">Número 1:</label>
            <input type="number" name="num1" id="num1">
            <br>
            <label for="num2">Número 2:</label>
            <input type="number" name="num2" id="num2">
            <br>
            <select name="operacion">
                <option value="suma">Suma</option>
                <option value="resta">Resta</option>
                <option value="multiplicacion">Multiplicación</option>
                <option value="division">División</option>
            </select>
            <br>
            <button type="submit">Calcular</button>
        </form>
    `);
});

// Ruta para realizar el cálculo
app.post('/calcular', (req, res) => {const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    const operacion = req.body.operacion;
    let resultado;

    switch (operacion) {
        case 'suma':
            resultado = num1 + num2;
            break;
        case 'resta':
            resultado = num1 - num2;
            break;
        case 'multiplicacion':
            resultado = num1 * num2;
            break;
        case 'division':
            if (num2 === 0) {
                resultado = "No se puede dividir por cero";
            } else {
                resultado = num1 / num2;
            }
            break;
        default:
            resultado = "Operación no válida";
    }

    res.send(`El resultado de la ${operacion} es: ${resultado}`);
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}/`);

});