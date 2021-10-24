let express = require('express');
let app = express();
let nodemailer = require("nodemailer");

// 본인 Gmail 계정
const EMAIL = "id@gmail.com";
const EMAIL_PW = "pwd";

// 이메일 수신자
let receiverEmail = "receiver's email";

// transport 생성
let transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: EMAIL,
        pass: EMAIL_PW,
    },
});

// 전송할 email 내용 작성
let mailOptions = {
    from: EMAIL,
    to: receiverEmail,
    subject: "[nodemailer] Sample Email",
    html: "<h1>Hello, World!</h1>",
};

// email 전송
transport.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
        return;
    }

    console.log(info);
    console.log("send mail success!");
});