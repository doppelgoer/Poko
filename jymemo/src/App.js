import './App.css';
import React, { useState } from 'react';
import MemoForm from './components/MemoForm';
import Memo from './components/Memo';


function App() {
  const [memos, setMemo] = useState([]);


  function removeMemo(id) {
    setMemo(memos.filter(memo => {
      return memo.id !== id;
    }));
  };



  return (
    <div>
      <div className="App">
        Memo List<h1 />
      </div>

      <div className="memo">
        <MemoForm setMemo={setMemo} memos={memos} />
      </div>

      <div className="body">
        <Memo memos={memos} removeMemo={removeMemo}></Memo>
      </div>

    </div>
  );
}

export default App;
