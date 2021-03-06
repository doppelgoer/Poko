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
  password: '112213',
  database: 'mine' // 데이터베이스 고르기
});

connection.connect();

const port = process.env.PORT || 3001;

app.listen(port,()=>console.log(`Listening on port ${port}`));

app.get('/', function(req,res){
    res.send('test');
})

app.get('/text', async function(req,res){
    console.log(3213213,req.query);
    let selectTestSql = `SELECT * FROM test`;
    let selectTestRes = await query(selectTestSql);
    console.log(selectTestRes);
    res.send(selectTestRes[0]);
})

app.get('/getMemo', async function(req,res){
    // console.log(123123123);
    let selectMemoSql = `SELECT * FROM memo`
    let selectMemoRes = await query(selectMemoSql);
    console.log(selectMemoRes);
    res.send(selectMemoRes)
});

app.put('/inputTitleAndMemo', async function(req,res){
    // console.log(req.query);
    let insertMemoSql = `INSERT INTO memo(date, title, memo) 
                        VALUES('${req.query.date}','${req.query.title}','${req.query.memo}')`
// console.log(123);
    let insertMemoRes = await query(insertMemoSql);
});

query = function(q) {
    return new Promise((resolve, reject) => {
        connection.query(q,
            function (err, rows, fields) {
                if(err) {
                    console.log(q);
                    reject(err);
                }
                resolve(rows);
            });
    });
}