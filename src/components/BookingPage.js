import BookingForm from './BookingForm.js';
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from '../timeslotAPI.js';
import '../css/BookingPage.css';
import {useNavigate} from 'react-router-dom';


const updateTimes = (availaleTimes, date) => {
    return fetchAPI(date);
}

const initializeTimes =  fetchAPI(new Date());


function BookingPage() {

    const navigate = useNavigate();

    const submitForm = (formData) => {
    if( submitAPI(formData))
        navigate("/confirmed-booking");
    }

    const [availableTimes, dispatch] = useReducer(updateTimes,initializeTimes);

    return (
        <div className='bookingPage'>
            <div className='bookingHeaderDiv'>
                <div className="bookingHeader">
                    <h2>Make your reservation here</h2>
                </div>
            </div>
            <BookingForm
                         availableTimes={availableTimes}
                         dispatch={dispatch}
                         submitForm = {submitForm}
            />
        </div>
    );
}

export default  BookingPage ;  //initializeTimes;//updateTimes;