import { RightCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import ContactUsCardForMain from './ContactUsCardForMain';
export default function ContactUsForMain() {
  return (
    <div className="mainSecContactUs">
      <div className="mainSecContactUsTop">
        <div>CONTACT US</div>
        <Link to="/Contact" className="">
          <RightCircleOutlined />
        </Link>
        <div>2</div>
      </div>
      <div className="mainSecCards">
        <ContactUsCardForMain />
        <ContactUsCardForMain />
        <ContactUsCardForMain />
        <ContactUsCardForMain />
      </div>
    </div>
  );
}
