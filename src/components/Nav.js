import '../css/Nav.css';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <div className="Nav">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-me">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/bookingPage">Reservations</Link></li>
                    <li><Link to="/orderOnline">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </div>
    );
}
export default Nav;