import Card from './Card.js';
import '../css/Highlights.css';
import greek_salad from '../images/greek_salad.jpg';
import bruchetta from '../images/bruchetta.svg';
import lemon_dessert from '../images/lemon_dessert.jpeg';

function Highlights() {
    return (
        <div className="Highlights">
            <section className="topSection">
                <h2 id="h2id">This week's specials!</h2>
                <button id="menubutton">Online Menu</button>
            </section>
            <section className="cardSection">
                <Card className = "dishCard"
                    dishImage = {greek_salad}
                    imgAlt={"Greek Salad"}
                    dishName = {"Greek Salad"}
                    dishPrice = {"$12.99"}
                    dishDescription = {"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."}
                    />
                <Card className = "dishCard"
                dishImage = {bruchetta}
                imgAlt={"Bruchetta"}
                dishName = {"Bruchetta"}
                dishPrice = {"$16.99"}
                dishDescription = {"Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables."}
                />
                <Card className = "dishCard"
                dishImage = {lemon_dessert}
                imgAlt={"Lemon Dessert"}
                dishName = {"Lemon Cake"}
                dishPrice = {"$8.50"}
                dishDescription = {"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}
                />
            </section>
        </div>
    );
}

export default Highlights;