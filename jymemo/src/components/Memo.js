import React, { useState } from 'react';


const Memo = ({ memos, removeMemo }) => {
    console.log('memos', memos);




    const renderMemo = memos.length ? memos.map((memo, index) =>
        <div key={index}>
            <span>
                <strong>title :{memo.title}</strong>
                <u> content :{memo.content}</u>
            </span>
            <div>
                <button onClick={() => removeMemo(memo.id)}>삭제</button>
            </div>
        </div>


    ) : "메모가 없습니다.";
    console.log('1234', memos.index);

    return (
        <div>
            {renderMemo}
        </div>
    )
};

export default Memo;