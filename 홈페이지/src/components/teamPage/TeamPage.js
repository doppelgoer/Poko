import TeamCard from "./TeamCard";
// import "../../css/body.css";
import "../../css/contactUs.css";
import Title from "../publicCp/Title";
import axios from "axios";
import { useState, useEffect } from "react";
const headAddress = `http://localhost`;
function Team() {
  const [textbox, setTextBox] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhoneNum, setUserPhoneNum] = useState("");
  const [inputContent, setInputContent] = useState("");

  // nodemailer에 데이터 보낼때
  async function postUserInfo() {
    let addData = await axios({
      method: "post",
      url: `${headAddress}/contactUs`,
      data: {
        // data 는 post,   params은 get방식
        name: userName,
        email: userEmail,
        phoneNum: userPhoneNum,
        content: inputContent,
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

  return (
    <div className="teamPage">
      <div className="teamPageContainer">
        <Title title="OUR MEMBER"></Title>
        <div className=""></div>
      </div>

      {/* <div
        style={{ backgroundColor: "white", width: "100vw", height: "100vh" }}
      >
        Our Team
      </div> */}
    </div>
  );
}

export default Team;
