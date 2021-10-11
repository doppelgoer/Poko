import { Link } from 'react-router-dom';
import '../css/TodoListTemplate.css';
import { BiMessageSquareAdd } from "react-icons/bi"
import { GiTrashCan } from "react-icons/gi"
import { IoIosArrowBack } from "react-icons/io"
import axios from 'axios'
const headAddress = 'http://localhost:3001'

function TodoListTemplate({ memo, setMemoData }) {

    console.log(113636, memo);

    // function deleteItem(id) {
    //     const array = memo;
    //     setMemoData(array.filter(item => item.id !== id));
    // }
    //===================서버에 데이터 전송===================
    //서버에 데이터 전송 함수.
    const deleteItem = async function (idx, e) {
        console.log("dsfadsf", idx);
        // let idx = memoData[memoData.length - 1].idx + 1;

        //서버의 res를 testAxios1 에 담기.서버에 보내는부분
        let deleteAxios = await axios({//token
            method: 'GET',
            url: `${headAddress}/delete`,
            params: {
                idx: idx
            }
        })
        //서버에서 받아온 정보 콘솔
        console.log('deleteSuccess', deleteAxios.data);

        console.log(656569, e.target.name);
        setMemoData(memo.splice(e.target.name, 1))//start부터 1개

        //test1 state 변화 콘솔
        // console.log('test1', test1);
        //test1 state에 받아온 정보 추가;
        return deleteAxios

        // alert('저장완료')
    }//end test fun
    //===================서버에 데이터 전송===================

    // function test(e) {
    //     console.log(656569, e.target.name);
    //     setMemoData(memo.splice(e.target.name))
    // }
    // const test = ()=>{

    // }

    // props로 받은 메모 데이터를, div태그로 틀을 만들어준 다음 아래 return에서 뿌려주는것!
    const memoList = memo.map((memo, index) =>
        <div className='todoList' key={memo.idx}>

            <div className='todoListTitle'>
                {(memo.title).length > 18 ? `${(memo.title).slice(0, 18)}...` : (memo.title)}
            </div>

            <div className='todoListTxt'>
                {(memo.content).length > 20 ? `${(memo.content).slice(0, 20)}...` : (memo.content)}
            </div>

            {/* onClick={() => { deleteItem(id); }} */}
            <div className='todoListDel'>
                {/* <Link to="/" className="GiTrashCan"> */}
                {/* <GiTrashCan className="GiTrashCan" onClick={test} name={index} >
                </GiTrashCan> */}

                <button className="GiTrashCan" onClick={(e) => { deleteItem(memo.idx, e); }} name={index} >
                    adsf
                </button>
                {/* </Link> */}
            </div>
        </div >
    )


    return (
        <div className="todo-list-template">
            <div className='title'>
                <div className='title-memu'>
                    <Link to="/" className='memoLink'>
                        <IoIosArrowBack className="title-menu IoArrowBack"></IoIosArrowBack>
                        {/* <FiHome className="title-menu FiHome" ></FiHome> */}
                    </Link>

                    {/* <BiSearchAlt className="title-menu BiSearchAlt" >
                    </BiSearchAlt> */}

                    <Link to="/TodoMemo" className='memoLink'>
                        <BiMessageSquareAdd className="title-menu BiEditAlt" ></BiMessageSquareAdd>
                    </Link>
                </div>
            </div>
            <div className="todos-wrapper">

                {/* 메모리스트 뿌려주기 */}
                {memoList}
            </div>
        </div>
    )
}

export default TodoListTemplate;