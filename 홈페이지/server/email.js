const { GamesOutlined, Email } = require('@material-ui/icons');
const { getDefaultNormalizer } = require('@testing-library/dom');
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

// 전송 옵션 설정
let transporter = nodemailer.createTransport({
  // 사용하고자 하는 서비스, gmail 계정으로 전송 예정이니 'gmail'
  service: 'gmail',
  // host를 gmail로 설정
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    // Gmail 주소 입력, 'testmail@gmail.com'
    user: process.env.NODEMAILER_USER,
    // Gmail 패스워드 입력
    pass: process.env.NODEMAILER_PASS,
  },
});

const main = async () => {
  // 메일 전송하기
  let info = await transporter.sendMail({
    // 보내는 곳의 이름과, 메일 주소를 입력
    from: `"WDMA Team" <${process.env.NODEMAILER_USER}>`,
    // 받는 곳의 메일 주소를 입력
    to: jeongyeonkim8974,
    // 보내는 메일의 제목을 입력
    // text: 일반 text로 작성된 내용
    // html: html로 작성된 내용
    text: generatedAuthNumber,
    html: `<b>${generatedAuthNumber}</b>`,
  });

  console.log('Message sent: %s', info.messageId);

  res.status(200).json({
    status: 'Success',
    code: 200,
    message: 'Sent Auth Email',
  });
};

main().catch(console.error);
