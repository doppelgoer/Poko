import { useState, useEffect } from "react";
import axiosFun from "../../modules/axios";
import BoardName from "./BoardName";
const contentStyle = {
  background: "#6d6d6d",
  display: "flex",
  border: "1px solid white",
  margin: "0.5vh 1vw 0.5vh 4vw",
};
export default function BoardList() {
  // { idx: 2, title: '제목3', content: '내용3' },
  // { idx: 3, title: '제목4', content: '내용4' },
  // { idx: 3, title: '제목4', content: '내용4' },
  // { idx: 3, title: '제목4', content: '내용4' },
  // { idx: 3, title: '제목4', content: '내용4' },
  // { idx: 3, title: '제목4', content: '내용4' },
  const [boardContents, setBoardContents] = useState([
    { idx: 0, title: "제목1", content: "내용1" },
    { idx: 1, title: "제목2", content: "내용2" },
  ]);
  async function getBoardContentFun() {
    console.log(5435435);
    let test = await axiosFun("GET", `getBoardContents`, {});
    setBoardContents([...boardContents, ...test]);
    // console.log(boardContents);
  }
  useEffect(() => {
    getBoardContentFun();
  }, []);
  const contentList = boardContents.map((content, index) => (
    <div key={index} className="content" style={contentStyle}>
      {content.title}
    </div>
  ));

  return (
    <div style={{ display: "flex", width: "91vw" }}>
      <BoardName></BoardName>
      <div
        style={{
          background: "pink",
          width: "100%",
          height: "30vh",
          marginLeft: "1vw",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          padding: "1vh",
          border: "10px solid black",
          borderRadius: "1.5rem",
          overflow: "hidden",
        }}
      >
        {contentList}
      </div>
    </div>
  );
}
