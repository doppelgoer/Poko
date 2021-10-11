const express = require('express');
const app = express();
const api = require('./routes/index');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api);

let mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'poko', // 데이터베이스 고르기
});

connection.connect();

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Listening on port ${port}`));

// app.get('/', function (req, res) {
//     res.send('test');
// })

app.get('/', async function (req, res) {
  console.log('In memopage', req.query);
  // let selectTestSql = `SELECT * FROM test`;
  // let selectTestRes = await query(selectTestSql);
  // console.log(selectTestRes);
  // res.send(selectTestRes[0]);
  let selectQurey = `SELECT * FROM test`;
  let selectRes = await query(selectQurey);
  console.log('성공', selectRes);
  res.send(selectRes);
});

app.get('/text', async function (req, res) {
  console.log('In text router', req.query);
  // let selectTestSql = `SELECT * FROM test`;
  // let selectTestRes = await query(selectTestSql);
  // console.log(selectTestRes);
  // res.send(selectTestRes[0]);
  let insertQurey = `INSERT INTO test (title, content) VALUES ('${req.query.title}', '${req.query.content}')`;
  let insertRes = await query(insertQurey);
  console.log(insertRes);
  res.send('alalalalal');
});

app.get('/delete', async function (req, res) {
  // console.log('In text router', req.query);
  // let selectTestSql = `SELECT * FROM test`;
  // let selectTestRes = await query(selectTestSql);
  // console.log(selectTestRes);
  // res.send(selectTestRes[0]);
  let deleteQurey = `DELETE FROM test WHERE idx = '${req.query.idx}';`;
  let deleteRes = await query(deleteQurey);
  console.log(deleteRes);
  res.send(deleteRes);
});

query = function (q) {
  return new Promise((resolve, reject) => {
    connection.query(q, function (err, rows, fields) {
      if (err) {
        console.log(q);
        reject(err);
      }
      resolve(rows);
    });
  });
};
