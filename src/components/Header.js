import '../css/Header.css';
import Nav from './Nav.js';
import Logo from "../images/Logo.svg";
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className="Header">
            <Link id="logo_id" to="/"><img  src={Logo} alt="Logo"/></Link>
            {/* <img id="logo_id" src={Logo} alt="Logo"/> */}
            <Nav className="navClass"/>
        </div>
    );
}
export default Header;