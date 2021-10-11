import { useState } from 'react';
import BoardBanner from './BoardBanner';
import BoardList from './BoardList';
import BordContent from './BoardContent';

function BoardPage() {
  // const [testState, setTestState] = useState(0);
  return (
    <div className="board" style={{ padding: '24px' }}>
      <BoardBanner></BoardBanner>
      <BoardList></BoardList>
      <BordContent></BordContent>
      {/* <button
        onClick={function () {
          setTestState(testState + 1);
          console.log(testState);
        }}
      >
        123
      </button> */}
    </div>
  );
}
export default BoardPage;
