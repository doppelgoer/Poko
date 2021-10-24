const express = require("express");
const app = express();
const api = require("./routes/index");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

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
const REST_API_KEY = "ba0d65bf6ac39628accf57f92180fd3a";
const REDIRECT_URI = "http://localhost/oauth";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

app.get("/kakaoAxios", async function (req, res) {
  console.log(222222);
  console.log(KAKAO_AUTH_URL);
  res.redirect(KAKAO_AUTH_URL);
});

app.get("/oauth", function (req, res) {
  console.log(req.query.code);
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
  console.log(selectTestRes);
  res.send(selectTestRes[0]);
});

app.get("/getBoardContents", async function (req, res) {
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
app.post("/contactUs", async function (req, res) {
  console.log(1234);
  console.log(3213213, req.body);
});
