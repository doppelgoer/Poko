import Body from '../Body';
import bgAvi from '../../css/fire.mp4';
import '../../css/Bg.css';
import {useState} from 'react';

function Main() {
  const img = 'https://youtu.be/3zjt3pq8SdY';
  const [test, setTest] = useState(0);
  return (
    // <div className="main">
    // <div className="vimeoWrap">
    <div >
      <div >
        
      </div>
      {/* <video className="bgAvi" src={bgAvi} type="video/mp4" muted autoPlay /> */}
      {/* <video controls src={img} type="video/mp4" muted autoPlay loop></video> */}
      {/* <source src="bgAvi" type="video/mp4" /> */}
      {/* <strong>Your browser does not support the video tag.</strong> */}
      {/* <h1>Lorem Ipsum Dolor</h1> */}
      {/* </video> */}
    </div>
  );
}

export default Main;
