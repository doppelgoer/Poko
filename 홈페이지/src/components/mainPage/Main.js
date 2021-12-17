import { useState, useEffect, React, useRef, createContext } from 'react';
import '../../css/Bg.css';
import MainFirst from './MainFirst';
import MainSecond from './MainSecond';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';

import axiosFunc from '../../modules/axios';
function Main() {
  const dispatch = useDispatch();
  //메모 불러오기, ./redux/reducers/reducersIndex.js 파일에 객체 불러온거

  const products = useSelector(state => state.products);
  console.log(products);
  // function addMemo() {
  //   dispatch({
  //     type: 'memo/ADD_MEMO',
  //     payload: {
  //       title: memoState.title,
  //       content: memoState.content,
  //     },
  //   });
  // }
  //products 정보 갖고 오기
  useEffect(async () => {
    const dataRes = await axiosFunc('GET', 'getData/getProducts', null);
    // console.log(6436, dataRes);
    dispatch({
      type: 'products/SET_PRODUCTS',
      payload: dataRes.data,
    });
  }, []);
  // console.log(memo);
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });
  // console.log(isMobile);
  function scroll(ref) {
    ref.current.scrollIntoView({
      behavior: 'smooth',
    });
  }
  const mainScrollRef = useRef();
  if (isMobile) {
    return (
      <div className="mainPageBox">
        <MainFirst mainScrollRef={mainScrollRef} scrollFun={scroll}></MainFirst>
      </div>
    );
  } else {
    return (
      <div className="mainPageBox">
        <MainFirst mainScrollRef={mainScrollRef} scrollFun={scroll}></MainFirst>
        <MainSecond mainScrollRef={mainScrollRef}></MainSecond>
      </div>
    );
  }
}

export default Main;
