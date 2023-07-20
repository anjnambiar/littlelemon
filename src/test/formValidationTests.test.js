import { fireEvent } from '@testing-library/react';
import { render, screen} from "@testing-library/react";
import BookingForm from '../components/BookingForm.js';
//import {validateForm} from '../components/BookingForm.js';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test("test first name validation", ()=>{
    render(<BookingForm />);
    const input = screen.getByTestId('fName');
    fireEvent.change(input, {target:{value:'Annamma'}});
    expect(input.value).toBe('Annamma');
})


test("test last name validation", ()=>{
    render(<BookingForm />);
    const input = screen.getByTestId('lName');
    fireEvent.change(input, {target:{value:'Annamma'}});
    expect(input.value).toBe('Annamma');
})

// test("form submission validation", ()=> {
//     const validateMock = jest.fn();
//     render(<BookingForm validate={validateMock}/>);
//     const btn = screen.getByRole("button"); // get the button (pressable)
//     fireEvent.click(btn); // click it
//     expect(validateMock).toHaveReturned();

// })




