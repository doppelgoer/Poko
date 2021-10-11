
import { BiLeftArrowAlt, BiSave } from "react-icons/bi"
import { Link } from 'react-router-dom';
import { useState } from 'react';

//TodoListTemplate에서 for문 돌릴때 key에 할당할 idx 값.
function TodoMemo(props) {
    let idx=0;
    if(localStorage.getItem('memo')){
        let memoidx = JSON.parse(localStorage.getItem('memo')).length;
        // console.log(memoidx);
        // console.log(memoidx);
        idx = memoidx-1;
    }
    // idx = props.memoData[props.memoData.length-1]
    //타이틀 state
    const [title, setTitle] = useState();
    //메모 state
    const [memo, setMemo] = useState();
    //onChange 로 해당 태그의(타이틀) value값 받아와서 state값 변경.
    function inputTitle(e) {
        setTitle(e.target.value)
    }
    //onChange 로 해당 태그의(내용) value값 받아와서 state값 변경.
    function inputMemo(e) {
        setMemo(e.target.value)
    }
    //App.js 에서 받아온 메모데이터state props랑 메모데이터state 변경 props 활용
    //위의 두개 함수(inputTitle,inputMemo)에서 변경된 title,memo state 받아와서
    //메모데이터state props를 메모데이터state 변경 props 로 업데이트.
    function inputTitleAndMemo() {
        //   ...~~~ 은 깊은복사, ES6 신문법
        props.setMemoData([...props.memoData, {
            idx: idx,
            title: title,
            contetnt: memo
        }
        ])
        //for문에서 사용할 key 값은 중복허용x, idx++
        // idx++;
        // localStorage.setItem('memo', props.memoData);
        // localStorage.setItem('title', JSON.stringify({idx:idx, title:title}));
        // localStorage.setItem('memo', JSON.stringify({idx:idx, title:memo}));
        // let test = localStorage.getItem('memo');
        // console.log(test.memo);
        // console.log("props.memoData",props.memoData);
        alert('저장되었습니다.')
    }
    return (
        <div className="todo-list-template">
            <div className="title">
                <div className="title-menu">
                    {/* 뒤로가기 버튼, 링크로 메인페이지로만 가고 기능없음. */}
                    <Link to="/" className='memoLink'>
                        <BiLeftArrowAlt className="title-menu BiLeftArrowAlt" ></BiLeftArrowAlt>
                    </Link>
                    {/* 저장버튼, state 업데이트 기능 있음. */}
                    <Link to="/" className='memoLink'>
                        <BiSave className="title-menu BiSave" onClick={inputTitleAndMemo} ></BiSave>
                    </Link>
                </div>
            </div>
            {/* 제목, 내용 입력 */}
            <div className="todos-wrapper">
                {/* onChage로(버튼이 아니고, 인풋창이기에) 내용 변경시마다
                함수 호출  */}
                <input className='inputTitle' placeholder='제목을 입력해주세요'
                    onChange={inputTitle} />
                {/* onChage로(버튼이 아니고, 인풋창이기에) 내용 변경시마다
                함수 호출  */}
                <textarea className='textareaMemo' placeholder='메모를 입력해주세요'
                    onChange={inputMemo} />
            </div>


        </div >
    )
}

export default TodoMemo;