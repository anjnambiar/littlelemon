import './Nav.css';

function Nav() {
    return (
        <div className="Nav">
            <ul>
                <li><a className="Home" href="">Home</a></li>
                <li><a className="About" href="">About</a></li>
                <li><a className="Menu" href="">Menu</a></li>
                <li><a className="Reservations" href="">Reservations</a></li>
                <li><a className="OrderOnline" href="">Order Online</a></li>
                <li><a className="Login" href="">Login</a></li>
            </ul>
        </div>
    );
}
export default Nav;