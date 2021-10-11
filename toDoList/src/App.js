
// import axios from 'axios';
import TodoListTemplate from './components/TodoListTemplate'
import TodoMemo from './components/TodoMemo'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { useState } from 'react';




function App() {
  // let localTitle = JSON.parse(localStorage.getItem('title'));
  // let localMemo = JSON.parse(localStorage.getItem('memo'));
  // console.log(123123,localTitle);
  // console.log(46546,localMemo);
  
  //최상단에서 갖고 있는 메모 데이터
  let localTitleMemo = JSON.parse(localStorage.getItem('memo'));
  // console.log(1111111,localTitleMemo);
  const [memoData, setMemoData] = useState(localTitleMemo);
  // console.log(localStorage.getItem('memo'));
  if(localStorage.getItem('memo')==null){
    // console.log('타냐?');
    setMemoData([])
  }
  // console.log(memoData);
  localStorage.setItem('memo', JSON.stringify(memoData));
  
  // useEffect(()=>{
  // setMemoData(localTitleMemo)}
  // ,[]
  // )
  // async function getData() {
  //   try {
  //     //응답 성공
  //     const response = await axios.get('http://localhost:3001/');
  //     setMemoData(response.data);
  //     console.log(memoData);
  //     console.log(response.data);
      
  //   } catch (error) {
  //     //응답 실패
  //     console.error(error);
  //   }
  // }
  // useEffect( () => {
  //   async function getMemoData() {
  //   try {
  //     //응답 성공
  //     const response = await axios.get('http://localhost:3001/');
  //     setMemoData(response.data);
      
  //   } catch (error) {
  //     //응답 실패
  //     console.error(error);
  //   }
  // }
  // getMemoData();
  // }, [])
  return (
    <div className='page'>
      {/* 라우팅 문법 */}
      <Router>
        <Switch>
          {/* 메모데이터 state 를 props 로 전송 */}
          <Route path="/" exact component={() => <TodoListTemplate memoData={memoData} />}></Route>
          {/* 메모데이터 state 와 변경함수를 props 로 전송 */}
          <Route path="/TodoMemo" exact component={() => <TodoMemo memoData={memoData} setMemoData={setMemoData} />} ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
