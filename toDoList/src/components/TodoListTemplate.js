
import { Link } from 'react-router-dom';
import '../css/TodoListTemplate.css';
import { BiListUl, BiEditAlt, BiSearchAlt } from "react-icons/bi"

function TodoListTemplate(props) {
    //App.js에서 props 로 전달받은 메모데이터 포문돌리기
    const memoList = props.memoData.map((memo) =>
        <div className='todoList' key={memo.idx}>
            <div className='todoListTitle' >제목 : {memo.title}
            </div>
            <div className='todoListTxt' >{memo.contetnt}
            </div>
        </div>
    )
    return (
        <div className="todo-list-template">
            <div className="title">
                <div className="title-menu">
                    {/* 여긴 아이콘 이랑 라우팅 링크 달아둔거. */}
                    <BiListUl className="title-menu BiListUl" ></BiListUl>
                    <BiSearchAlt className="title-menu BiSearchAlt" ></BiSearchAlt>
                    <Link to="/TodoMemo" className='memoLink'>
                        <BiEditAlt className="title-menu BiEditAlt" ></BiEditAlt>
                    </Link>
                </div>
            </div>
            <div className="todos-wrapper">
                {/* 메모리스트 뿌려주기 */}
                {memoList}
            </div>
        </div >
    );
};

export default TodoListTemplate;