import express from 'express';
import bodyParser from 'body-parser';
import db from './connection.js'
import response from './response.js';

const app = express();
const port = 3000;

app.use(bodyParser.json())

app.get('/', (req,res) => {
    response(200, 'ini data', 'ini message', res)
})

app.get('/mahasiswa', (req,res) => {
    response(200, 'mahasiswa get listt', res)
})

app.get('/mahasiswa/:nim', (req,res) => {
    const nim = req.params.nim;
    response(200, `spesifik mahasiswa by id ${nim}`, res)
})

app.post('/mahasiswa', (req,res) => {
    response(200, 'INI POST REQUEST', res)
})

app.put('/mahasiswa', (req,res) => {
    response(200, 'ini put', res)
})

app.delete('/mahasiswa', (req,res) => {
    response(200, 'ini delete', res)
})


app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})