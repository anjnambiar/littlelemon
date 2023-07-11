import './Main.css';
import HeroSection from './HeroSection';
import Highlights from './Highlights';
import Testimonials from './Testimonials.js';
import AboutMe from './AboutMe';

function Main() {
    return (
        <div className="Main">
        <section className="heroSection"><HeroSection/></section>
        <section className="highlights"><Highlights/></section>
        <section className="testimonials"><Testimonials/></section>
        <section className="about"><AboutMe/></section>
        </div>
    );
}
export default Main;