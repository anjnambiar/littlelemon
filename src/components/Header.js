import '../css/Header.css';
import Nav from './Nav.js';
import Logo from "../images/Logo.svg";

function Header() {
    return (
        <div className="Header">
            <img id="logo_id" src={Logo} alt="Logo"/>
            <Nav className="navClass"/>
        </div>
    );
}
export default Header;