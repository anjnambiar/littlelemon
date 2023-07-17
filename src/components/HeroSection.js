
import restaurantfood from "../images/restaurantfood.jpg";
import "../css/HeroSection.css";
import {Link} from 'react-router-dom';

function HeroSection() {
    return (
        <div className="HeroSection">
            <section className="intro">
                <h1>Little Lemon</h1>
                <h5>Chicago</h5>
                <p>We are a family owned Mediterrean restaurant,
                    focused on traditional recipies  served with a modern twist.</p>
                <button>
                <Link id="reserveButton" to="/bookingPage">Reserve a Table</Link>
                    </button>
            </section>
            <section className="photo">
                <img id="hero_img"src={restaurantfood} alt="restaurantfood"/>
            </section>
        </div>
    );
}
export default HeroSection;