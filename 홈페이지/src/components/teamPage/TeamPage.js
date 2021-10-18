import memberImg from '../../img/member.png';
import '../../css/body.css';
import axios from 'axios';
import { useState, useEffect } from "react";
const headAddress = `http://localhost`;

function Team() {

    const [textbox, setTextBox] = useState([]);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhoneNum, setUserPhoneNum] = useState('');
    const [inputContent, setInputContent] = useState('');


    // nodemailer에 데이터 보낼때
    async function postUserInfo() {

        let addData = await axios({
            method: "post",
            url: `${headAddress}/contactUs`,
            data: {             // data 는 post,   params은 get방식
                name: userName,
                email: userEmail,
                phoneNum: userPhoneNum,
                content: inputContent
            },
        });
    }

    // async function postContactUsFun() {
    //     console.log(5435435);
    //     let test = await axiosFun("POST", `contactUs`, {});
    //     setTextBox([...textbox, ...test]);

    // }
    // useEffect(() => {
    //     insertInfo();
    // }, []);


    const onClick = (event) => {

        event.preventDefault();
        setTextBox({
            name: userName,
            email: userEmail,
            phoneNum: userPhoneNum,
            content: inputContent
        });
        postUserInfo();
    };
    console.log('text', textbox);

    const setUserNameFun = (e) => {
        setUserName(e.target.value);
    };

    const setUserEmailFun = (e) => {
        setUserEmail(e.target.value);
    };

    const setUserPhoneNumFun = (e) => {
        setUserPhoneNum(e.target.value);
    };

    const setInputContentFun = (e) => {
        setInputContent(e.target.value);
    };





    return (
        <div className="teamBox">

            <div
                className="memberTitle">
                <h1>Team</h1>
            </div>
            <div
                className="memberImgArea">
                <img src={memberImg} />
            </div>

            <div className="contactBox">
                <div className="infoBox">
                    <div className="userName">
                        <input
                            type="text"
                            placeholder="name"
                            value={userName}
                            onChange={setUserNameFun}>
                        </input>
                    </div>

                    <div className="userEmail">
                        <input
                            type="text"
                            placeholder="email"
                            value={userEmail}
                            onChange={setUserEmailFun}>
                        </input>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="telephone"
                            value={userPhoneNum}
                            onChange={setUserPhoneNumFun}>
                        </input>
                    </div>
                </div>

                <div className="emailBox" >
                    <textarea
                        name="opinion"
                        cols="30"
                        rows="5"
                        placeholder="내용"
                        value={inputContent}
                        onChange={setInputContentFun}>
                    </textarea>
                </div>

            </div>
            <div>
                <button onClick={onClick}>
                    Submit
                </button>
            </div>
        </div >
    )
};



export default Team;
