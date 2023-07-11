
import "./Testimonials.css";
import {AiFillStar} from 'react-icons/ai';

function Testimonials() {
    return (
        <div class="Testimonials">
            <h2 id="testimonial_heading">Testimonials</h2>
            <div class="testimonial_cards">
                <Testimonial_Card/>
                <Testimonial_Card/>
                <Testimonial_Card/>
                <Testimonial_Card/>
            </div>
        </div>
    );
}

function Testimonial_Card(){
    return(
        <div class="testimonial_details">
            <span className="starRating">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </span>
            <h5 id="reviewer">John Smith</h5>
            <p id="foodReview">The food was excellent !
            Very neat and clean restaurant with warm service. Definitely would recommend.</p>
        </div>
    );
}

export default Testimonials;