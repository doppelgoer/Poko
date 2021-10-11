import { useState, useEffect } from 'react';
import axiosFun from '../../modules/axios';
import BoardName from './BoardName';
const contentStyle = {
  background: '#6d6d6d',
  display: 'flex',
  border: '1px solid white',
  margin: '0.5vh 1vw 0.5vh 4vw',
};
export default function BoardList() {
  // { idx: 2, title: '제목3', content: '내용3' },
  // { idx: 3, title: '제목4', content: '내용4' },
  // { idx: 3, title: '제목4', content: '내용4' },
  // { idx: 3, title: '제목4', content: '내용4' },
  // { idx: 3, title: '제목4', content: '내용4' },
  // { idx: 3, title: '제목4', content: '내용4' },
  const [boardContents, setBoardContents] = useState([]);
  async function getBoardContentFun() {
    // console.log(5435435);
    let test = await axiosFun('GET', `getBoardContents`, {});
    // console.log(6666, test);
    setBoardContents(test);
    // console.log(boardContents);
  }
  useEffect(() => {
    getBoardContentFun();
  }, []);
  // console.log(4444, boardContents);
  // const contentList = boardContents.map(content => {
  //   console.log(1111, content);
  //   return (
  //     <div key={content.idx} className="content" style={contentStyle}>
  //       {content.title}
  //     </div>
  //   );
  // });
  const contentList = boardContents.map((content, index) => (
    <div key={content.idx} className="content" style={contentStyle}>
      {content.title}
    </div>
  ));
  // console.log(444, boardContents);
  // console.log(555, contentList);
  return (
    <div style={{ display: 'flex', width: '91vw' }}>
      <BoardName></BoardName>
      <div
        style={{
          background: 'pink',
          width: '100%',
          height: '30vh',
          marginLeft: '1vw',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          padding: '1vh',
          border: '10px solid black',
          borderRadius: '1.5rem',
          overflow: 'hidden',
        }}
      >
        {contentList}
      </div>
    </div>
  );
}
