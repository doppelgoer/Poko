const express = require('express');
const app = express();
const api = require('./routes/index');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api);
let mysql = require('mysql');
const router = require('./routes/index');
const { getMaxListeners } = require('process');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'poko', // 데이터베이스 고르기
  port: '3307',
});

connection.connect();

const port = process.env.PORT || 80;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.static(path.join(__dirname, '../build')));
app.get('/', function (req, res) {
  res.send(express.static(path.join(__dirname, '../build/index.html')));
});

app.get('/text', async function (req, res) {
  console.log(3213213, req.query);
  let selectTestSql = `SELECT * FROM test`;
  let selectTestRes = await query(selectTestSql);
  console.log(selectTestRes);
  res.send(selectTestRes[0]);
});

app.get('/getBoardContents', async function (req, res) {
  //   console.log(123123);
  //   console.log(req.query);
  let getBoardContentsSql = `SELECT idx,title FROM board_content`;
  let getBoardContentsRes = await query(getBoardContentsSql);
  //   console.log(getBoardContentsRes);
  //   console.log(getBoardContentsRes);
  res.send(getBoardContentsRes);
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

// Contact US page
app.post('/contactUs', async function (req, res) {
  console.log(1234);
  console.log(3213213, req.body);
  console.log(3213213, req.body.email);
  let user_email = req.body.email;
  let user_name = req.body.name;
  let user_phoneNum = req.body.phoneNum;
  let user_input_content = req.body.content;
  // 전송 옵션 설정
  let transporter = nodemailer.createTransport({
    // 사용하고자 하는 서비스, gmail계정으로 전송할 예정 'gmail로 설정'
    service: 'gmail',
    // host를 gmail로 설정
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      // Gmail 주소 입력, 'testmail@gmail.com'
      // user: process.env.NODEMAILER_USER ,
      user: 'jeongyeonkim8974@gmail.com',
      // Gmail 패스워드 입력
      // pass: process.env.NODEMAILER_PASS ,
      pass: 'brsngauxqcbycttw'
    },
  });


  let emailHtml =`<div>
  이메일 : ${user_email},
  이름 : ${user_name},
  휴대폰 : ${user_phoneNum},
  내용 : ${user_input_content}
  </div>`
// 메일 전송하기
    let info = await transporter.sendMail({
      // 보내는 곳의 이름과, 메일 주소를 입력
      from : user_email,
      // 받는 곳의 메일 주소를 입력
      to: 'jeongyeonkim8974@gmail.com',
      subject: req.body.subject,
      // 보내는 메일의 제목을 입력
      // text: 일반 text로 작성된 내용
      // html: html로 작성된 내용
      text:emailHtml
      
      
    });
  });
