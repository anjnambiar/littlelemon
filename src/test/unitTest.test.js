
import { render, screen , renderHook} from "@testing-library/react";
import BookingForm from '../components/BookingForm.js';
import BookingPage from '../components/BookingPage.js';
import updateTimes from '../components/BookingPage.js';
import initializeTimes from '../components/BookingPage.js';
import '@testing-library/jest-dom';


test('Renders the BookingForm heading', () => {
     render(<BookingForm />);
    const headingElement = screen.getByText("First Name");
    expect(headingElement).toBeInTheDocument();
})

// test('Update time slots', () => {
//     const availableTimes =  [ "17:00","17:30", "18:00","18:30",
//                               "19:30", "20:00","20:30","21:30",
//                               "22:00","22:30","23:00","23:30",];
//     const date = new Date();
//     const updateTime = updateTimes(availableTimes, date);
//     expect(updateTime).toEqual(availableTimes);
// })


// test('Initialize time' , () => {
//     const initTimes = {timeSlots : ["17:00", "17:45", "18:15", "20:45", "21:30"]};
//     const initialize = initializeTimes();
//     expect(initialize).toEqual(initTimes);
// })