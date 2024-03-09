const express = require('express')

const app = express()

const port = 8000

app.get('/', function(_, res) {
    res.send('<h1>Página de inicio</h1>')
})

app.get('/login', function(_, res) {
    res.send('Página de login');
})

app.get('**', (_, res) => { res.send('No se encuentra esta ruta.') })

app.listen(port, () => {
    console.log(`El servidor está corriendo en: http://127.0.0.1:${port}`)
})