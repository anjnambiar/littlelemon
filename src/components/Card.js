import '../css/Card.css';

function Card(props) {
    return(
        <div className="Card">
                <img id="dish_image" src={props.dishImage} alt={props.imgAlt} />
                <section className="dish">
                    <h4 className="dishName"><b>{props.dishName}</b></h4>
                    <p className="price">{props.dishPrice}</p>
                </section>
                <p className="description">{props.dishDescription}</p>
                <section className="delivery">
                    <button>Order for delivery</button>
                </section>
            </div>
    );
}

export default Card;