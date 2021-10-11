import React, { memo } from "react";
import axios from "axios";
const headAddress = "http://localhost:3001";
// import { BiListUl, BiEditAlt, BiSearchAlt } from "react-icons/bi";
// import { Link } from "react-router-dom";

function MemoList(props) {
  const deleteMemo = async function (idx, e) {
    let deleteaxios = await axios({
      method: "GET",
      url: `${headAddress}/deleteMemo`,
      params: {
        idx: idx,
      },
    });
    console.log("index", e.target.name);
    let mList = props.memos;
    console.log(mList);
    mList.splice(e.target.name, 1);
    console.log(mList);
    props.setMemo([...mList]);
    console.log("delete-axios", deleteaxios.data);
    return deleteaxios;
  }; //end test fun

  const memoList = props.memos.map((memo, index) => (
    <div className="memo-list" key={memo.idx}>
      <div className="memo-title">TITLE : {memo.title}</div>
      <div className="meme-content">{memo.content}</div>
      <button onClick={(e) => deleteMemo(memo.idx, e)} name={index}>
        DELETE
      </button>
      <br />
      <br />
    </div>
  ));

  return (
    <div className="todo-list-template">
      <div className="list-area">{memoList}</div>
    </div>
  );
}

export default MemoList;
