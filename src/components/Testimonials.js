
import "../css/Testimonials.css";
import {AiFillStar} from 'react-icons/ai';

function Testimonials() {
    return (
        <div className="Testimonials">
            <h2 id="testimonial_heading">Testimonials</h2>
            <div className="testimonial_cards">
                <TestimonialCard name={"Eva Williams"} review={"The food was excellent ! The salad was well arranged"}/>
                <TestimonialCard name={"John Smith"} review={"Very neat and clean restaurant with warm service. Family friendly place!"}/>
                <TestimonialCard name={"Kathy Perry"} review={"Definitely would recommend and we would visit this place again"}/>
                <TestimonialCard name={"Allen Solly"} review={"A must visit place if you are in Chicago. Dont miss out !!!"}/>
            </div>
        </div>
    );
}

function TestimonialCard(props){
    return(
        <div className="testimonial_details">
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