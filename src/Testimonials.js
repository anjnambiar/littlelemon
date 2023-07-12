
import "./Testimonials.css";
import {AiFillStar} from 'react-icons/ai';

function Testimonials() {
    return (
        <div class="Testimonials">
            <h2 id="testimonial_heading">Testimonials</h2>
            <div class="testimonial_cards">
                <Testimonial_Card name={"Eva Williams"} review={"The food was excellent ! The salad was well arranged"}/>
                <Testimonial_Card name={"John Smith"} review={"Very neat and clean restaurant with warm service. Family friendly place!"}/>
                <Testimonial_Card name={"Kathy Perry"} review={"Definitely would recommend and we would visit this place again"}/>
                <Testimonial_Card name={"Allen Solly"} review={"A must visit place if you are in Chicago. Dont miss out !!!"}/>
            </div>
        </div>
    );
}

function Testimonial_Card(props){
    return(
        <div class="testimonial_details">
            <span className="starRating">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </span>
            <h5 id="reviewer">{props.name}</h5>
            <p id="foodReview">{props.review}</p>
        </div>
    );
}

export default Testimonials;