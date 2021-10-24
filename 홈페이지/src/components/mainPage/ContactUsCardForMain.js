import JJYImage from '../../img/test.png';
import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from '@ant-design/icons';

export default function ContactUsCardForMain() {
  return (
    <div className="contactUsCards">
      <div className="contactUsCard">
        <div className="imBx">
          <img src={JJYImage} className="contactUsCardImg" alt="profile" />
        </div>
        <div className="contactUsCardContent">
          <div className="contactUsCardContentBx">
            <div>
              <h3>
                안녀앟세용요용
                <br />
                개발자장준영
              </h3>
            </div>
          </div>
          <ul className="contactUsCardSci">
            <li style={{ '--i': 1 }}>
              <InstagramOutlined />
            </li>
            <li style={{ '--i': 2 }}>
              <FacebookOutlined />
            </li>
            <li style={{ '--i': 3 }}>
              <TwitterOutlined />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
