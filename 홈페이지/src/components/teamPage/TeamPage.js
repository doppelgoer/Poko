import TeamCard from "./TeamCard";
// import "../../css/body.css";
import "../../css/contactUs.css";
import Title from "../publicCp/Title";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
const headAddress = `http://localhost`;

function Team() {
  const isTablet = useMediaQuery({
    query: "(max-width:1024px)",
  });
  // console.log(isTablet);
  // const [textbox, setTextBox] = useState([]);
  // const [userName, setUserName] = useState("");
  // const [userEmail, setUserEmail] = useState("");
  // const [userPhoneNum, setUserPhoneNum] = useState("");
  // const [inputContent, setInputContent] = useState("");

  // // nodemailer에 데이터 보낼때
  // async function postUserInfo() {
  //   let addData = await axios({
  //     method: "post",
  //     url: `${headAddress}/contactUs`,
  //     data: {
  //       // data 는 post,   params은 get방식
  //       name: userName,
  //       email: userEmail,
  //       phoneNum: userPhoneNum,
  //       content: inputContent,
  //     },
  //   });
  // }

  // async function postContactUsFun() {
  //     console.log(5435435);
  //     let test = await axiosFun("POST", `contactUs`, {});
  //     setTextBox([...textbox, ...test]);

  // }
  // useEffect(() => {
  //     insertInfo();
  // }, []);
  if (isTablet) {
    return (
      <div className="teamPage">
        <div className="teamPageContainer">
          <Title title="OUR MEMBER"></Title>
          <div className="memberContainer">
            <TeamCard txt="WE ARE POKO"></TeamCard>
            <TeamCard txt="김정연"></TeamCard>
            <TeamCard txt="김하나"></TeamCard>
            <TeamCard txt="김보라"></TeamCard>
            <TeamCard txt="장준영"></TeamCard>
            <TeamCard txt="간략한"></TeamCard>
          </div>
        </div>

        {/* <div
        style={{ backgroundColor: "white", width: "100vw", height: "100vh" }}
      >
        Our Team
      </div> */}
      </div>
    );
  } else if (!isTablet) {
    return (
      <div className="teamPage">
        <div className="teamPageContainer">
          <Title title="OUR MEMBER"></Title>
          <div className="memberContainer">
            <TeamCard txt="김정연"></TeamCard>
            <TeamCard txt="김하나"></TeamCard>
            <TeamCard txt="여기는"></TeamCard>
            <TeamCard txt="김보라"></TeamCard>
            <TeamCard txt="POKO"></TeamCard>
            <TeamCard txt="장준영"></TeamCard>
            <TeamCard txt="간략한"></TeamCard>
            <TeamCard txt="문자가 들어감"></TeamCard>
          </div>
        </div>

        {/* <div
        style={{ backgroundColor: "white", width: "100vw", height: "100vh" }}
      >
        Our Team
      </div> */}
      </div>
    );
  }
}

export default Team;
