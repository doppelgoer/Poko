
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
function App() {
  //메모 불러오기, ./redux/reducers/reducersIndex.js 파일에 객체 불러온거
  const memo = useSelector(state => state.memo);
  //메모, 업데이트 용 state
  const [memoState, setMemoState] = useState({title : '', content : ''})
  const [updateMemoState, setUpdateMemoState] = useState();
  //store에 접근해서 변경하기.
  const dispatch = useDispatch();
  //메모 추가 함수
  function addMemo(){
    dispatch({
      type: 'memo/ADD_MEMO',
      payload: {
        title : memoState.title,
        content : memoState.content
      }
    })
  }

  //메모 업데이트 함수
  function updateMemo(){
    // console.log(updateMemoState);
    //idx 안적으면 업뎃 불가
    if(!updateMemoState.idx) {
      alert('장난함?')
      return;
    }
    // console.log(parseInt(updateMemoState.idx));
    dispatch({
      type: 'memo/UPDATE_MEMO',
      //페이로드는 store에 데이터 전송할떄 사용.
      payload: {
        idx : updateMemoState.idx,
        title : updateMemoState.title,
        content : updateMemoState.content
      }
    })
  }
  //addMemo 타이틀 onChange 함수
  function addMemoInputTitle(e){
    setMemoState({...memoState,
                  title : e.target.value});
  }
  //addMemo 제목 onChange 함수
  function addMemoInputContent(e){
    setMemoState({...memoState,
                  content : e.target.value});
  }
  //updateMemo idx onChange 함수
  function updateMemoInputIdx(e){
    // console.log(111);
    setUpdateMemoState({...updateMemoState,
                  idx : Number(e.target.value)});
  }
  //updateMemo 타이틀 onChange 함수
  function updateMemoInputTitle(e){
    setUpdateMemoState({...updateMemoState,
                  title : e.target.value});
  }
  //updateMemo 제목 onChange 함수
  function updateMemoInputContent(e){
    setUpdateMemoState({...updateMemoState,
                  content : e.target.value});
  }
    
  //store에 있는 memoState 갖고와 지는지 확인.
  const memoList = memo.map((memo)=> 
                            <div key={memo.idx}>
                              <div>idx : {memo.idx}</div>
                              <div>제목 : {memo.title}</div>
                              <div>내용 : {memo.content}</div>
                            </div>
                            )
  return (
    <div className="App">
      안녕{memoList}
      제목 : <input onChange={addMemoInputTitle}></input><br/>
      내용 : <input onChange={addMemoInputContent}></input><br/>
      <button onClick={addMemo}>눌러라~</button>
      <br/><br/>
      변경 : <br/>
      idx :  <input onChange={updateMemoInputIdx}></input><br/>
      제목 : <input onChange={updateMemoInputTitle}></input><br/>
      내용 : <input onChange={updateMemoInputContent}></input><br/>
      <button onClick={updateMemo}>눌러라~</button><br/>
      <input></input><br/>
      <button onClick={()=>(console.log(memo))}>메모확인버튼~</button><br/>
    </div>
  );
}

export default App;
