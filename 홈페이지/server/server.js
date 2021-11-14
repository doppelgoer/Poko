const express = require("express");
const app = express();
const api = require("./routes/index");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");
const axios = require("axios");
const qs = require("qs");
const config = require("../config.json").kakao;

//html content gzip으로 인코딩
const compression = require("compression");
app.use(compression());

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", api);
let mysql = require("mysql");
const router = require("./routes/index");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "poko", // 데이터베이스 고르기
  port: "3306",
});

connection.connect();

const port = process.env.PORT || 80;

app.listen(port, () => console.log(`Listening on port ${port}`));

///Kakao LOgin
const REDIRECT_URI = "http://localhost/oauth";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${config.REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

app.get("/kakaoAxios", async function (req, res) {
  console.log(222222);
  console.log(KAKAO_AUTH_URL);
  res.redirect(KAKAO_AUTH_URL);
});

app.get("/oauth", async function (req, res) {
  console.log(req.query.code);
  let authCode = req.query.code;
  let kakaoToken;
  try {
    //access토큰을 받기 위한 코드
    kakaoToken = await axios({
      //token
      method: "POST",
      url: "https://kauth.kakao.com/oauth/token",
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      data: qs.stringify({
        grant_type: "authorization_code",
        client_id: `${config.REST_API_KEY}`,
        redirectUri: `localhost/oauth`,
        code: authCode,
        client_secret: `${config.CLIENT_SECRET}`,
      }), //객체를 string 으로 변환
    });
  } catch (err) {
    console.log("auth/kakao/callvack 액세스 토큰 받기 에러 ", err);
  }
  console.log(kakaoToken);
  // return;
  // console.log(kakaoToken);
  //access토큰을 받아서 사용자 정보를 알기 위해 쓰는 코드
  let kakaoUser;
  // console.log(kakaoToken.data);
  try {
    // console.log(token);//access정보를 가지고 또 요청해야 정보를 가져올 수 있음.
    kakaoUser = await axios({
      method: "GET",
      url: "https://kapi.kakao.com/v2/user/me",
      headers: {
        Authorization: `Bearer ${kakaoToken.data.access_token}`,
      }, //헤더에 내용을 보고 보내주겠다.
    });
  } catch (e) {
    console.log(
      "auth/kakao/callvack 액세스 토큰으로 유저정보 받기 에러",
      e.data
    );
  }

  console.log(kakaoUser);

  // 다시 axios 날리기
  //카카오 로그인 숙제
});

app.use(express.static(path.join(__dirname, "../build")));
app.get("/", function (req, res) {
  res.send(express.static(path.join(__dirname, "../build/index.html")));
});

app.get("/text", async function (req, res) {
  let selectTestSql = `SELECT * FROM test`;
  let selectTestRes = await query(selectTestSql);
  res.send(selectTestRes[0]);
});

app.get("/getBoardContents", async function (req, res) {
  //   console.log(123123);
  //   console.log(req.query);
  let getBoardContentsSql = `SELECT idx,title FROM board_content`;
  let getBoardContentsRes = await query1(getBoardContentsSql);
  //   console.log(getBoardContentsRes);
  //   console.log(getBoardContentsRes);
  res.send(getBoardContentsRes);
});

query1 = function (q) {
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
app.post("/contactUs", async function (req, res) {
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
    service: "gmail",
    // host를 gmail로 설정
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      // Gmail 주소 입력, 'testmail@gmail.com'
      // user: process.env.NODEMAILER_USER ,
      user: "jeongyeonkim8974@gmail.com",
      // Gmail 패스워드 입력
      // pass: process.env.NODEMAILER_PASS ,
      pass: "brsngauxqcbycttw",
    },
  });

  let emailHtml = `
  이메일 : ${user_email},
  이름 : ${user_name},
  휴대폰 : ${user_phoneNum},
  내용 : ${user_input_content}
  `;
  // 메일 전송하기
  let info = await transporter.sendMail({
    // 보내는 곳의 이름과, 메일 주소를 입력
    from: user_email,
    // 받는 곳의 메일 주소를 입력
    to: "jeongyeonkim8974@gmail.com",
    subject: req.body.subject,
    // 보내는 메일의 제목을 입력
    // text: 일반 text로 작성된 내용
    // html: html로 작성된 내용
    text: `${emailHtml}`,
  });
});
