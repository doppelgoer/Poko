
import CalendarBox from './Components/CalendarBox';
import './App.css';
// import axios from 'axios';
import {  useState } from 'react';
// let headAddress = 'http://localhost:3001'

function App() {
  
  //서버에 데이터 전송///////////////////////////////////////////////////////
  // const [test1, setTest] = useState([]);
  // //서버에 데이터 전송 함수.
  // const test = async function() {
  //   // console.log(test1);
  // //서버의 res를 testAxios1 에 담기.
  // let testAxios1 = await axios({//token
  //         method: 'GET',
  //         url: `${headAddress}/text`,
  //         params: {
  //           name: 'hotelName'
  //         }
  //     })
  //     //서버에서 받아온 정보 콘솔
  //     console.log('testAxios1.datat',testAxios1.data);
  //     //test1 state 변화 콘솔
  //     console.log('test1',test1);
  //     //test1 state에 받아온 정보 추가;
  //     setTest([...test1,testAxios1.data]);   
  //     return testAxios1
  // }//end test fun
  // const testMap = test1.map((titleAndMemo)=>
  //   <div key={titleAndMemo.idx}>
  //     <div>idx : {titleAndMemo.idx}</div>
  //     <div>title : {titleAndMemo.title}</div>
  //     <div>memo : {titleAndMemo.memo}</div>
  //   </div>
  // )
  //서버에 데이터 전송///////////////////////////////////////////////////////
  const [modalDisplay,setModalDisplay] = useState('none');
  // useEffect(()=>{
  //   console.log('렌더링이요');
  // },[modalDisplay])
  return (
    <div className="App">
      <CalendarBox modalDisplay={modalDisplay} setModalDisplay={setModalDisplay}></CalendarBox>
      
      {/* <input id='inputId'></input><br/>
      버튼 누르면 서버에 전송되어요
      <button id='sendBtn1' onClick={test}>데이터 전송고 받기</button>
      {testMap} */}
    </div>
  );
}

export default App;
