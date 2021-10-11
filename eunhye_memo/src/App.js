
import TodoListTemplate from './components/TodoListTemplate'
import TodoMemo from './components/TodoMemo'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { useEffect, useState } from 'react';
const headAddress = 'http://localhost:3001'

function App() {
  const [memo, setMemo] = useState([]);
  //===================서버에 데이터 전송===================
  //서버에 데이터 전송 함수.
  const test = async function () {

    // console.log(test1);
    //서버의 res를 testAxios1 에 담기.
    let selectMemoData = await axios({//token
      method: 'GET',
      url: `${headAddress}/`,
      params: {
        // name: 'hotelName'
      }
    })
    //서버에서 받아온 정보 콘솔
    console.log(6363636, selectMemoData.data);
    setMemo(selectMemoData.data);
    //test1 state 변화 콘솔
    // console.log('test1', test1);
    //test1 state에 받아온 정보 추가;
    return selectMemoData
  }//end test fun
  //===================서버에 데이터 전송===================

  useEffect(() => {
    test()
  }, [])

  //최상단 메모 데이터
  // let localTitleMemo = JSON.parse(localStorage.getItem('memo'));

  // const [memoData, setMemoData] = useState(localTitleMemo);
  const [memoData, setMemoData] = useState(test)

  // console.log("최초 메모데이터", memoData);
  // console.log("내용길이", memoData[2].content.length);


  // // 최초에 메모가 하나도 없는 경우 배열형태로 만들어줌
  // if (localStorage.getItem('memo') == null) {
  //   setMemoData([])
  // }

  // localStorage.setItem('memo', JSON.stringify(memoData))
  // console.log("최상단메모데이터 : " + localStorage.getItem('memo'), JSON.stringify(memoData))

  return (
    <div className='page'>
      <Router>
        <Switch>
          {/* memodata state -> props */}
          <Route path="/" exact component={() =>
            <TodoListTemplate memo={memo} setMemoData={setMemoData} />}>
          </Route>
          {/* memodata state와 변경함수 -> props */}
          <Route path="/TodoMemo" exact component={() => <TodoMemo memoData={memo} setMemoData={setMemo} />} ></Route>
        </Switch>
      </Router>

    </div>

  )

}

export default App;
