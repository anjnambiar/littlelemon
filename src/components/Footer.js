import logo_big from '../images/logo_big.png';
import '../css/Footer.css';
// import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className="Footer">
            <img id="footer_logo" src={logo_big} alt="Logo"/>
            <div class="footer_elem">
                <div>
                    <ul className="footer_list">
                        <h4>Navigation</h4>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div>
                    <ul className="footer_list">
                        <h4>Contact</h4>
                        <li>Phone Number</li>
                        <li>Email Address</li>
                        <li>Location</li>
                    </ul>
                </div>
                <div>
                    <ul className="footer_list">
                        <h4>Social Media</h4>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Threads</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Footer;