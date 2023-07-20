import { fireEvent } from '@testing-library/react';
import { render, screen} from "@testing-library/react";
import BookingForm from '../components/BookingForm.js';
//import {validateForm} from '../components/BookingForm.js';
import '@testing-library/jest-dom';


// test("test first name validation", ()=>{
//     render(<BookingForm />);
//     const input = screen.getByTestId('fName');
//     fireEvent.change(input, {target:{value:'Anju'}});
//     expect(input.value).toBe('Anju');
// })


// test("test last name validation", ()=>{
//     render(<BookingForm />);
//     const input = screen.getByTestId('lName');
//     fireEvent.change(input, {target:{value:'Anju'}});
//     expect(input.value).toBe('Anju');
// })

test("form submission validation", ()=> {
    const validateMock = jest.fn();
    render(<BookingForm validate={validateMock}/>);
    const btn = screen.getByRole("button"); // get the button (pressable)
    fireEvent.click(btn); // click it
    expect(validateMock).toHaveReturned();

})

