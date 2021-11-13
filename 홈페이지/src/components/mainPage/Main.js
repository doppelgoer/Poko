import { useState, useEffect, React, useRef, createContext } from 'react';
import '../../css/Bg.css';
import MainFirst from './MainFirst';
import MainSecond from './MainSecond';

import { useMediaQuery } from 'react-responsive';
function Main() {
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
