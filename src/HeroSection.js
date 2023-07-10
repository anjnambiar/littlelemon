
import restaurantfood from "./images/restaurantfood.jpg";
import "./HeroSection.css"

function HeroSection() {
    return (
        <div className="HeroSection">
            <section className="intro">
                <h1>Little Lemon</h1>
                <h5>Chicago</h5>
                <p>We are a family owned Mediterrean restaurant,
                    focused on traditional recipies  served with a modern twist.</p>
                <button>Reserve a Table</button>
            </section>
            <section className="photo">
                <img src={restaurantfood} alt="restaurantfood"/>
            </section>
        </div>
    );
}
export default HeroSection;