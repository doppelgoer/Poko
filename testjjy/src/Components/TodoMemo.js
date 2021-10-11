import { useState } from "react";
import { Link } from 'react-router-dom';
import { BiSave } from "react-icons/bi"
import { IoIosArrowBack } from "react-icons/io"
import axios from 'axios'
const headAddress = 'http://localhost:3001'

const TodoMemo = ({ memoData, setMemoData }) => {

    //===================서버에 데이터 전송===================
    //서버에 데이터 전송 함수.
    const test = async function () {
        // console.log(test1);
        let idx;
        console.log("12312231232", memoData)
        if (memoData.length == 0) {
            idx = 0;
        } else idx = memoData[memoData.length - 1].idx + 1;
        setMemoData([...memoData, {
            idx: idx,
            title: title,
            content: memo
        }])

        //서버의 res를 testAxios1 에 담기.서버에 보내는부분
        let testAxios1 = await axios({//token
            method: 'GET',
            url: `${headAddress}/text`,
            params: {
                title: title,
                content: memo
            }
        })
        //서버에서 받아온 정보 콘솔
        console.log('testAxios1.datat', testAxios1.data);
        //test1 state 변화 콘솔
        // console.log('test1', test1);
        //test1 state에 받아온 정보 추가;
        return testAxios1

        // alert('저장완료')
    }//end test fun
    //===================서버에 데이터 전송===================

    //title을 setTitle로 state 만들어줌
    const [title, setTitle] = useState()

    //memo를 setMemo로 state 만들어줌
    const [memo, setMemo] = useState()

    //아직 onchange 쓰이지 않았지만 곧 해당 태그의 내용value 값을 받아서
    //state값을 변경해줄 예정
    function inputTitle(e) {
        setTitle(e.target.value)
    }
    function inputMemo(e) {
        setMemo(e.target.value)
    }

    // function inputTitleAndMemo() {
    //     setMemoData([...memoData, {
    //         id: new Date().valueOf(),
    //         title: title,
    //         content: memo
    //     }])
    //     alert('저장완료')
    // }

    return (
        <div className="todo-list-template">
            <div className="title">
                <div className="title-menu">
                    <Link to="/" className="memoLink">
                        <IoIosArrowBack className="title-menu IoArrowBack"></IoIosArrowBack>
                    </Link>
                    <Link to="/" className="memoLink">
                        <BiSave className="title-menu BiSave" onClick={test} >
                        </BiSave>
                    </Link>
                </div>
            </div>

            <div className="insertTodo-wrapper">
                {/* onclick아니고 onchange 인풋 입력할때마다 함수호출됨 */}
                <label className='TitleOfInsert'>
                    제목
                </label>
                <input className='inputTitle' placeholder='제목을 입력하세요' onChange={inputTitle}></input>

                <label className='TitleOfInsert'>
                    내용
                </label>
                <textarea className='textareaMemo' placeholder='이곳에 내용을 입력하세요' onChange={inputMemo} />
            </div>
        </div>
    )
}

export default TodoMemo;