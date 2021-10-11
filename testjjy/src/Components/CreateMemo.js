import React from "react";
// import { BiSave } from "react-icons/bi";
// import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const headAddress = "http://localhost:3001";

function CreateMemo(props) {
  const insert = async function () {
    console.log(52352521, props.memo[props.memo.length - 1]);
    let idx = props.memo[props.memo.length - 1].idx + 1;
    props.setMemo([
      ...props.memo,
      {
        idx: idx,
        title: title,
        content: content,
      },
    ]);
    console.log(54544, props.memo);
    let testAxios1 = await axios({
      method: "GET",
      url: `${headAddress}/insert`,
      params: {
        title: title,
        content: content,
      },
    });

    console.log("axios", testAxios1);

    return testAxios1;
  };

  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  function inputTitle(e) {
    setTitle(e.target.value);
  }

  function inputContent(e) {
    setContent(e.target.value);
  }

  function addMemo() {
    props.setMemoData([
      ...props.memoData,
      {
        // idx: idx,
        title: title,
        content: content,
      },
    ]);
    console.log("111111");
  }

  return (
    <div>
      <center>
        <h1> CreateMemo </h1>
        <input onChange={inputTitle} placeholder="TITLE" />
        <br />
        <textarea onChange={inputContent} placeholder="CONTENT" />
        <br />

        <button className="saveBtn" onClick={insert}>
          SAVE
        </button>
      </center>
    </div>
  );
}

export default CreateMemo;
