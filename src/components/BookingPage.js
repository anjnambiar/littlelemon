import BookingForm from './BookingForm.js';
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from '../timeslotAPI.js';
import '../css/BookingPage.css';


const updateTimes = (availaleTimes, date) => {
    return fetchAPI(date);
}

const initializeTimes =  fetchAPI(new Date());

const submitForm = (formData) => {
  return submitAPI(formData);
}


function BookingPage() {

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