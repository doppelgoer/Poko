import '../../css/Bg.css';
import MainFirst from './MainFirst';
import MainSecond from './MainSecond';
function Main() {
  // const img = 'https://youtu.be/3zjt3pq8SdY';
  return (
    // <div className="main">
    // <div className="vimeoWrap">
    <div>
      <MainFirst></MainFirst>
      <MainSecond></MainSecond>
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
