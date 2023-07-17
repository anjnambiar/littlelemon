import '../css/Main.css';
import HeroSection from './HeroSection.js';
import Highlights from './Highlights.js';
import Testimonials from './Testimonials.js';
import AboutMe from './AboutMe.js';

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