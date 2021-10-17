import memberImg from '../../img/member.png';
import '../../css/body.css';
import axiosFun from '../../modules/axios';
import { useState, useEffect } from "react";

function Team() {

    const [textbox, setTextBox] = useState();

    async function getContactUsFun() {
        console.log(5435435);
        let test = await axiosFun("GET", `contactUs`, {});
        <div>
            <textarea>쓰시오</textarea>
        </div>
    }

    useEffect(() => {
        getContactUsFun();
    }, []);

    return (
        <div className="teamBox">

            <div
                className="memberTitle">
                <h1>Team</h1>
            </div>
            <div
                className="memberImgArea">
                <img src={memberImg} />
            </div>

            <div className="contactBox">
                <div className="infoBox">
                    <div className="userName">
                        <input
                            type="text"
                            placeholder="name">
                        </input>
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="email">
                        </input>
                    </div>
                </div>

                <div className="emailBox" >
                    <textarea
                        name="opinion"
                        cols="30"
                        rows="5"
                        placeholder="내용">
                    </textarea>
                </div>

            </div>
            <div>
                <button>
                    보내기
                </button>
            </div>
        </div >
    )
};



export default Team;