// menghubungkan express js ke database yang kita miliki di xampp

import mysql from 'mysql';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cuy'
})

export default db