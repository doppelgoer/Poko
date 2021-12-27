import { useState } from "react";
export default function TeamCard(props) {
  const [txtStyle, setTxtStyle] = useState({ display: "none" });
  function showTxt() {
    // console.log(111);
    setTxtStyle({ display: "block" });
  }
  function hideTxt() {
    // console.log(111);
    setTxtStyle({ display: "none" });
  }
  return (
    <div
      className="teamCardContainer"
      onMouseOver={function () {
        showTxt();
      }}
      onMouseLeave={(e) => {
        hideTxt();
      }}
    >
      <div className="teamCardTxt" style={txtStyle}>
        {props.txt}
      </div>
      {/* <div className="teamImg">dsdsdsad</div>
      <div className="teamImg">dsdsdsad</div>
      <div className="teamImg">dsdsdsad</div>
      <div className="teamImg">dsdsdsad</div>
      <div className="teamImg">dsdsdsad</div> */}
    </div>
  );
}
