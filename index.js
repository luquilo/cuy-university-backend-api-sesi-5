import express from 'express';
import bodyParser from 'body-parser';
import db from './connection.js'
import response from './response.js';

const app = express();
const port = 3000;

app.use(bodyParser.json())

app.get('/', (req,res) => {
    response(200, 'api ready to go', 'succes', res)
})

app.get('/mahasiswa', (req,res) => {
    const sql = 'select * from mahasiswa'
    db.query(sql, (err,fields) => {
        if (err) throw err
        response(200, fields, 'message ini yak', res)
    })
})

app.get('/mahasiswa/:nim', (req,res) => {
    const nim = req.params.nim
    const sql = 'select * from mahasiswa where nim = ' + nim
    db.query(sql, (err,fields) => {
        if(err) throw err
        response(200, fields, 'ini pesan', res)
    })
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

// ini ada di sesi6

//ini adalah percobaan update di branch sesi 6
console.log('halo dari branch 6!')