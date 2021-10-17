
import Navbar from './Nav'
import '../../css/Header.css'
import logoImg from '../../img/logo.png'

function Header(props) {
    return (
        <div>
           
            <div className="headerLogo">
            <Navbar />
                <div className="logoArea">
                <img src={logoImg}/>
                </div>
            </div>
            

        </div>
    )
}

export default Header;