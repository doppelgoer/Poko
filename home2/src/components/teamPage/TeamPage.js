import memberImg from '../../img/member.png'
import '../../css/body.css'


function Team() {
    return (
        <div className="team">
            <div className="memberTitle">
                <h1>Team</h1>
            </div>
            <br />
            <div className="memberImgArea">
                <img src={memberImg}/>
            </div>
        </div>
    )
}
export default Team