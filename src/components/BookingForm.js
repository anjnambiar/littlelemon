import { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';


function BookingForm(props) {

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [eAddress, setEAddress] = useState("");
    const [phNum, setPhNum] = useState("");
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const navigate = useNavigate();

    const handleDateChange = (e) => {
        setDate(e.target.value);
        const newDate = new Date(e.target.value);
        props.dispatch(newDate);
        document.getElementById("time").innerHTML =
        props.availableTimes.reduce((tmp, x) => `${tmp}<option>${x}</option>`, '');
     }


     const handleSubmit = (e) => {
       e.preventDefault();
       if(props.submitForm(e.target.value)) {
            console.log("Just before Navigate");
            navigate("/confirmed-booking");
           console.log("Just after Navigate");
       }
     }


    return (
        <div>
            <form style = {{display:"grid",maxwidth:200,gap:20}}
                  onSubmit={handleSubmit}>

                <label htmlFor="fName">First Name</label>
                <input type="text" id="fName" placeholder="First Name" required
                        value={fName} onChange={e=>setFName(e.target.value)}/>

                <label htmlFor="lName">Last Name</label>
                <input type="text" id="lName" placeholder="Last Name" required
                        value={lName} onChange={e=>setLName(e.target.value)}/>

                <label htmlFor="eAddress">Email Address</label>
                <input type="email" id="eAddress" placeholder="Email Address" required
                        value={eAddress} onChange={e=>setEAddress(e.target.value)}/>

                <label htmlFor="phNum">Phone Number</label>
                <input type="number" id="phNum" placeholder="Phone Number" required
                        value={phNum} onChange={e=>setPhNum(e.target.value)}/>

                <label htmlFor="date">Choose date</label>
                <input type="date" id="date" required
                        value={date} onChange ={handleDateChange}/>

                <label htmlFor="time">Choose time</label>
                <select id="time" required>
                    <option id="items"></option>
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input type="number" min="1" max="10" id="guests" required
                        value={guests} onChange={e=>setGuests(e.target.value)}/>

                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" required
                        value={occasion} onChange={e=>setOccasion(e.target.value)}>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>

                </select>
                     <input type="submit" value="Make Your reservation"/>

            </form>

        </div>
    );
}

export default BookingForm;