import './Card.css';
import greek_salad from './images/greek_salad.jpg';
import delivery from './images/delivery.png';

function Card() {
    return(
        <div class="Card">
                <img id="dish_image" src={greek_salad} alt="greek salad" />
                <section class="dish">
                    <h4 class="dishName"><b>Greek Salad</b></h4>
                    <p class="price">$12.99</p>
                </section>
                <p class="description">The famous greek salad of crispy lettuce,
                peppers, olives and our Chicago style feta cheese, garnished with
                crunchy garlic and rosemary croutons.</p>
                <section class="delivery">
                    <button>Order for delivery</button>
                    {/* <h6 class="orderForDelivery"><b>Order for delivery</b></h6>
                    <img id="delivery_logo"src={delivery} alt="delivery" /> */}
                </section>
            </div>
    );
}

export default Card;