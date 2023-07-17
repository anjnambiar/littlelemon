import BookingForm from './BookingForm.js';
import '../css/BookingPage.css';
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from '../timeslotAPI.js';


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
        <div className="BookingPage">
            <BookingForm
                         availableTimes={availableTimes}
                         dispatch={dispatch}
                         submitForm = {submitForm}
            />
        </div>
    );
}

export default  updateTimes; //initializeTimes;//BookingPage ;