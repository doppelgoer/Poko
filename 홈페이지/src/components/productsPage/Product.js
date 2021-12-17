import React, { useState } from 'react';
import '../../css/Product.css';
import Pcard from './Pcard.js';
import Title from './Title';
import ProductCardStyle1 from './ProductCardStyle1';
import ProductCardStyle2 from './ProductCardStyle2';
import { HomeFilled, HomeOutlined } from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux';
function Product() {
  const productList = [
    {
      idx: 1,
      appName: 'App1',
      mainDeveloper: 'MEMEBER1',
      about:
        '이 어플은 메모장입니다 어쩌구 설명설명설명설명설명설명설명설명설명설명',
      projectDuration: '1M',
      hashTag: '#메모장 #안녕하세요',
      link: '#',
    },
    {
      idx: 2,
      appName: 'App2',
      mainDeveloper: 'MEMEBER2',
      about:
        '이 웹페이지는 일기를 쓸 수있는 어쩌구 설명설명설명설명설명설명설명설명설명설명',
      projectDuration: '2M',

      hashTag: '#일기장 #메롱',
      link: '#',
    },
    {
      idx: 3,
      appName: 'App3',
      mainDeveloper: 'MEMBER3',
      about: '이 사람은 어쩌구 설명설명설명설명설명설명설명설명설명설명',
      projectDuration: '2M',
      hashTag: '#안뇽 #ㅎㅇㅎㅇ',
      link: '#',
    },
  ];
  const [testState, setTestState] = useState([
    <HomeFilled></HomeFilled>,
    <HomeOutlined></HomeOutlined>,
  ]);

  const products = useSelector(state => state.products);
  console.log(262474, products);
  // const [pCardData, setPCardData] = useState([])
  // console.log(111, testState);
  const pCardTag = products.map((data, index) => {
    console.log(666, data);
    if (index === 2) {
      return (
        <ProductCardStyle2
          key={index}
          title={data.title}
          titleIcon={data.titleIcon}
          txt={data.txt}
        ></ProductCardStyle2>
      );
    } else {
      return (
        <ProductCardStyle1
          key={index}
          title={data.title}
          titleIcon={data.titleIcon}
          txt={data.txt}
        ></ProductCardStyle1>
      );
    }
  });
  console.log(6347, pCardTag);
  return (
    // <div>
    //   <Pcard productList={productList}> </Pcard>
    // </div>
    <div className="productPage">
      <div className="productPageContainer">
        <Title></Title>
        <div className="productCardContainer">
          {pCardTag}
          {/* <ProductCardStyle1></ProductCardStyle1>
          <ProductCardStyle1></ProductCardStyle1>
          <ProductCardStyle2></ProductCardStyle2>
          <ProductCardStyle1></ProductCardStyle1>
          <ProductCardStyle1></ProductCardStyle1> */}
          {/* <ProductCardStyle1 test={testState[0]}></ProductCardStyle1>
          <ProductCardStyle1 test={testState[1]}></ProductCardStyle1>
          <ProductCardStyle2></ProductCardStyle2>
          <ProductCardStyle1 test={testState[0]}></ProductCardStyle1>
          <ProductCardStyle1 test={testState[1]}></ProductCardStyle1> */}
        </div>
      </div>
    </div>
  );
}

export default Product;
