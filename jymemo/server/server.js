const express = require('express');
const app = express();
const api = require('./routes/index');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api);

let mysql = require('mysql')
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'poko', // 데이터베이스 고르기
    port: 3307
});

connection.connect();

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/', function (req, res) {
    res.send('test');
})

app.post('/insert', async function (req, res) {
    console.log(1111, req.query);
    console.log(22222, req.body);
    let testSql = `INSERT INTO memo(title, content) VALUES('${req.body.title}','${req.body.content}')`;
    let testRes = await query(testSql);
})

app.get('/select', async function (req, res) {
    console.log('1111');
    let selectMemoSql = `SELECT * FROM memo`
    let selectMemoRes = await query(selectMemoSql);
    console.log(selectMemoRes);
    res.send(selectMemoRes)
});


query = function (q) {
    return new Promise((resolve, reject) => {
        connection.query(q,
            function (err, rows, fields) {
                if (err) {
                    console.log(q);
                    reject(err);
                }
                resolve(rows);
            });
    });
}