import Navbar from "./Nav";
import "../../css/Header.css";
import logoImg from "../../img/logo.png";
import { KAKAO_AUTH_URL } from "../../config";
import kakaologo from "../../img/kakaologo.jpg";
import axios from "axios";

function Header(props) {
  function kakaoLoginAioxs() {
    // console.log(2222);
    let testAxios1 = axios({
      //token
      method: "GET",
      url: `http://localhost/kakaoAxios`,
      params: {},
    });
  }

  return (
    <div>
      <div className="headerLogo">
        <Navbar />
        <div className="logoArea">
          <img src={logoImg} alt="logo" />
        </div>
        <div style={{ width: "70px", height: "70px" }}>
          {/* <kakaoBtn herf={KAKAO_AUTH_URL}>
            <img src={kakaologo}></img>
            <span>카카오계정 로그인</span>
          </kakaoBtn> */}
          {/* <button type="button"  className="kakaoBtn">
            <img src={kakaologo} />{" "}
          </button> */}
          {/* <button id="kakaoAxios" onClick={kakaoLoginAioxs}>
            KAKAO LOGIN
          </button> */}
          <a href="http://localhost/kakaoAxios">KAKAO LOGIN</a>
        </div>
      </div>
    </div>
  );
}

export default Header;

// <div
// style={{
//   background: "violet",
//   width: "30vw",
//   height: "30vh",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   //   flexDirection: "column",
// }}
// >
// <div
//   style={{
//     background: "violet",
//     width: "5vw",
//     height: "5vh",
//     border: "1px solid black",
//   }}
// ></div>
// <div
//   style={{
//     background: "violet",
//     width: "5vw",
//     height: "5vh",
//     border: "1px solid black",
//   }}
// ></div>
// </div>
