import React, { useState } from 'react';
import axios from 'axios';
const headAddress = 'http://localhost:3000';


function MemoForm({ setMemo, memos }) {
    const [memoTitle, setMemoTitle] = useState('');
    const [memoContent, setMemoContent] = useState('');
    const [titleError, setTitleError] = useState('');
    const [contentError, setContentError] = useState('');



    // db에 데이터 삽입.
    async function insertData() {
        let addData = await axios({
            method: "post",
            url: `${headAddress}/insert`,
            data: {             // data 는 post,   params은 get방식
                title: memoTitle,
                content: memoContent,
            },
        });
    }

    // db에 데이터 조회
    async function selectData() {

        let selectedData = await axios({
            methos: "get",
            url: `${headAddress}/select`,
            params: {             // data 는 post,   params은 get방식
                title: memoTitle,
                content: memoContent,
            },
        })
    };





    const resetErrors = () => {
        setTitleError('');
        setContentError('');
    }

    const validateForm = () => {
        let validated = true;
        if (!memoTitle) {
            setTitleError('제목을 넣어주세여');
            validated = false;
        };

        if (!memoContent) {
            setContentError('내용을 넣어주세요');
            validated = false;
        };
    };

    // 메모추가
    const addMemo = (event) => {
        event.preventDefault();
        setMemo([...memos, {
            id: Date.now(),
            title: memoTitle,
            content: memoContent
        }]);

        if (validateForm()) {
            resetErrors();
        };

        insertData();

        // console.log(53535, memos);
    }

    // 메모장 입력부분
    function setMemoTitleFun(e) {
        setMemoTitle(e.target.value)

    }
    function setMemoContentFun(e) {
        setMemoContent(e.target.value)

    }

    return (
        <div>


            <form onSubmit={addMemo}>
                <input
                    type="text"
                    placeholder="메모 제목"
                    onChange={setMemoTitleFun}>
                </input>
                <br />
                <div>{titleError}</div>
                <input
                    type="text"
                    placeholder="메모 내용"
                    onChange={setMemoContentFun}>
                </input>
                <br />
                <div>{contentError}</div>
                <button id="메모추가"
                    type="submit">
                    메모추가
                </button>

            </form>
            <button onClick={selectData}>메모조회</button>
        </div>
    )
};

export default MemoForm;