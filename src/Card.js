import './Card.css';

function Card(props) {
    return(
        <div class="Card">
                <img id="dish_image" src={props.dishImage} alt={props.imgAlt} />
                <section class="dish">
                    <h4 class="dishName"><b>{props.dishName}</b></h4>
                    <p class="price">{props.dishPrice}</p>
                </section>
                <p class="description">{props.dishDescription}</p>
                <section class="delivery">
                    <button>Order for delivery</button>
                </section>
            </div>
    );
}

export default Card;