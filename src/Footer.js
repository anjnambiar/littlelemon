import logo_big from './images/logo_big.png';
import './Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <img src={logo_big} alt="Logo"/>
            <section>Doormat Navigation</section>
            <section>Contact</section>
            <section>Social Media Links</section>
        </div>
    );
}
export default Footer;