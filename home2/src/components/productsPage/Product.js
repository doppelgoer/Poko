import React from "react";
import "../../css/Product.css";
import Pcard from "./Pcard.js";

function product() {
  const productList = [
    {
      idx: 1,
      appName: "App1",
      mainDeveloper: "MEMEBER1",
      about:
        "이 어플은 메모장입니다 어쩌구 설명설명설명설명설명설명설명설명설명설명",
      projectDuration: "1M",
      hashTag: "#메모장 #안녕하세요",
      link: "#",
    },
    {
      idx: 2,
      appName: "App2",
      mainDeveloper: "MEMEBER2",
      about:
        "이 웹페이지는 일기를 쓸 수있는 어쩌구 설명설명설명설명설명설명설명설명설명설명",
      projectDuration: "2M",

      hashTag: "#일기장 #메롱",
      link: "#",
    },
    {
      idx: 3,
      appName: "App3",
      mainDeveloper: "MEMBER3",
      about: "이 사람은 어쩌구 설명설명설명설명설명설명설명설명설명설명",
      projectDuration: "2M",
      hashTag: "#안뇽 #ㅎㅇㅎㅇ",
      link: "#",
    },
  ];
  return (
    <div>
      <Pcard productList={productList}> </Pcard>
    </div>
  );
}

export default product;
