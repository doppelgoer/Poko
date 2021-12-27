import { HomeFilled, HomeOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
export default function ProductCardStyle1(props) {
  // console.log(props.dataIndex);
  const translateX = (props.dataIndex % 6) * 105;
  const cardStyles = {
    height: `${props.height}px`,
    transform: `translateX(${translateX}%)`,
  };
  return (
    // <div className="productCardStyle1" style={cardStyles}>
    <div className="productCardStyle1">
      {/* <div>{titleIcon}</div> */}
      <div>{props.title}</div>
      <div>{props.txt}</div>
      <div>gdfgfd{props.dataIndex}</div>
      <div>gdfgfd{props.dataIndex}</div>
    </div>
  );
}
