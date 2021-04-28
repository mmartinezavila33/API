const express = require('express');

const app = express();

const port = 8080;


app.get('/', (req, res) => {


    res.send('Bienvenidos!! Estoy feliz que Hagas Parte De Mi Api, Espero sea De su Agrado');
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
process.env.RUNKIT_ENDPOINT_URL;