const nodemailer = require("nodemailer");

// 본인 Gmail 계정
const EMAIL = "your_gmail_account@gmail.com";
const EMAIL_PW = "your_gmail_password";

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