import memberImg from "../../img/member.png";
import "../../css/body.css";

function Team() {
  return (
    <div className="team">
      <div className="memberTitle">
        <h1>Our Team</h1>
      </div>
      <br />
      <br />
      <div className="memberImgArea">
        <img src={memberImg} />
      </div>
    </div>
  );
}
export default Team;
