import React, { useState } from "react";
import "../../css/Product.css";
import Title from "../publicCp/Title";
import ProductCardStyle1 from "./ProductCardStyle1";
import ProductCardStyle2 from "./ProductCardStyle2";
import { HomeFilled, HomeOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
function Product() {
  const data = [
    {
      title: "1",
      txt: "165555555555555555gfdsgdfgdfgdfgdf5665555555555555555gfdsgdfgdfgdfgdf5665555555555555555gfdsgdfgdfgdfgdf5665555555555555555gfdsgdfgdfgdfgdf5665555555555555555gfdsgdfgdfgdfgdf56",
      height: "300",
    },
    { title: "1", txt: "1" },
    {
      title: "1",
      txt: "1555555555556436555556436555556436555556436555556436555556436555556436555556436555556436555556436555556436555556436555556436555555564365643655555643655555555555555555",
    },
    {
      title: "1",
      txt: "1365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555",
    },
    { title: "1", txt: "1555555555555564365555555555555" },
    { title: "1", txt: "1" },
    { title: "1", txt: "1" },
    {
      title: "1",
      txt: "1555555555556436555556436555556436555556436555556436555556436555556436555556436555556436555556436555556436555556436555556436555555564365643655555643655555555555555555",
    },
    {
      title: "1",
      txt: "1365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555",
    },
    { title: "1", txt: "1555555555555564365555555555555" },
    { title: "1", txt: "1" },
    {
      title:
        "1365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555",
      txt: "16565555565555555555555555gfdsgdfgdfgdfgdf5655555555555gfdsgdfgdfgdfgdf5665555555555555555gfdsgdfgdfgdfgdf5665555555555555555gfdsgdfgdfgdfgdf5665555555555555555gfdsgdfgdfgdfgdf5665555555555555555gfdsgdfgdfgdfgdf5665555555555555555gfdsgdfgdfgdfgdf56555555555555555gfdsgdfgdfgdfgdf56",
    },
    {
      title: "1",
      txt: `165555643555564365555564365555564365555564365555564365555564365555564365555564365555564365555564365555564365555564365555564365555564365555555555555555
    5gfdsgdfgdfgd
    fgdf56`,
    },
    { title: "1", txt: "1" },
    {
      title: "1",
      txt: "1555555555556436555556436555556436555556436555556436555556436555556436555556436555556436555556436555556436555556436555556436555555564365643655555643655555555555555555",
    },
    {
      title: "1",
      txt: "1365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555",
    },
    { title: "1", txt: "1555555555555564365555555555555" },
    { title: "1", txt: "1" },
    {
      title: "1",
      txt: "5555555564365555555555555555gfdsgdfgdfgdfgdf564365555555555555555564365555555555555555564365555555551",
    },
    { title: "1", txt: "1555555556436555555555" },
    { title: "1", txt: "1" },
    {
      title: "1",
      txt: `1555555555
    5555643655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff55553655ffffffffffffffffff5555555
    5555`,
    },
    { title: "1", txt: "1" },
    {
      title:
        "1643655555643655555643655555643655555643655553655555643655553655555643655553655555643655555643655555643655555643655555643655555643655555643655555643655555643655555643655555643655555643655555643655555643655555643655555643655555643655555643655555643655555643655555",
      txt: "1",
    },
    { title: "1", txt: "1" },
    {
      title: "1",
      txt: "1555555555556436555556436555556436555556436555556436555556436555556436555556436555556436555556436555556436555556436555556436555555564365643655555643655555555555555555",
    },
    {
      title: "1",
      txt: "1365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555",
    },
    { title: "1", txt: "1555555555555564365555555555555" },
    { title: "1", txt: "1" },
    { title: "1", txt: "1" },
    {
      title: "1",
      txt: "1365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555",
    },
    {
      title: "1",
      txt: `1555555555
    55556436555555555
    5555`,
    },
    { title: "1", txt: "1" },
    {
      title: "1",
      txt: "1555555555556436555556436555556436555556436555556436555556436555556436555556436555556436555556436555556436555556436555556436555555564365643655555643655555555555555555",
    },
    {
      title: "1",
      txt: "1365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555",
    },
    { title: "1", txt: "1555555555555564365555555555555" },
    { title: "1", txt: "1" },
    { title: "1", txt: "1" },
    {
      title: "1",
      txt: "1555555555556436555556436555556436555556436555556436555556436555556436555556436555556436555556436555556436555556436555556436555555564365643655555643655555555555555555",
    },
    {
      title: "1",
      txt: "1365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555365555564365555",
    },
    { title: "1", txt: "1555555555555564365555555555555" },
    { title: "1", txt: "1" },
    { title: "1", txt: "1555555555555564365555555555555" },
  ];
  const [testState, setTestState] = useState([
    <HomeFilled></HomeFilled>,
    <HomeOutlined></HomeOutlined>,
  ]);

  // const products = useSelector((state) => state.products);
  // console.log(262474, products);
  // const [pCardData, setPCardData] = useState([])
  // console.log(111, testState);
  const pCardTag = data.map((data, index) => {
    let dataIndex = index;
    return (
      <ProductCardStyle1
        key={index}
        title={data.title}
        // titleIcon={data.titleIcon}
        txt={data.txt}
        height={data.height}
        dataIndex={dataIndex}
      ></ProductCardStyle1>
    );
  });
  return (
    // <div>
    //   <Pcard productList={productList}> </Pcard>
    // </div>
    <div className="productPage">
      <div className="productPageContainer">
        <Title title="OUR PROJECT">
          <div className="filterContainer">
            <ul className="productFilter">
              <li>ALL</li>
              <li>JAVASCRIPT</li>
              <li>REACT</li>
              <li>SVELT</li>
              <li>FLUTTER</li>
            </ul>
          </div>
        </Title>
        <div className="productCardContainer">
          {pCardTag}
          {/* <ProductCardStyle1></ProductCardStyle1>
          <ProductCardStyle1></ProductCardStyle1>
          <ProductCardStyle1></ProductCardStyle1>
          <ProductCardStyle1></ProductCardStyle1>
          <ProductCardStyle1></ProductCardStyle1>
          <ProductCardStyle1></ProductCardStyle1>
          <ProductCardStyle1></ProductCardStyle1>
          <ProductCardStyle1></ProductCardStyle1>
          <ProductCardStyle1></ProductCardStyle1>
          <ProductCardStyle1></ProductCardStyle1>
          <ProductCardStyle1></ProductCardStyle1>
          <ProductCardStyle1></ProductCardStyle1> */}
        </div>
      </div>
    </div>
  );
}

export default Product;
