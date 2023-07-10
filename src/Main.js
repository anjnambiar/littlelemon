import './Main.css';
import HeroSection from './HeroSection';
import Highlights from './Highlights';

function Main() {
    return (
        <div className="Main">
        <section className="heroSection"><HeroSection/></section>
        <section className="highlights"><Highlights/></section>
        {/* <section className="testimonials">Testimonials</section> */}
        {/* <section className="about">About</section> */}
        </div>
    );
}
export default Main;