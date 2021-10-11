

import MemoBox from '../MemoComponents/MemoBox'
export default function ModalText(props){
    
    return(
        <div className='modal-div' style={{'width' : '80%', 'height':'50%'}}>
            <MemoBox setModalDisplay={props.setModalDisplay} date={props.selectedDate} 
            getMemo={props.getMemo} setGetMemo={props.setGetMemo} />
        </div>
    )
}