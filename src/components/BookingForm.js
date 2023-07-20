import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';

function BookingForm(props) {

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [eAddress, setEAddress] = useState("");
    const [phNum, setPhNum] = useState("");
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");
    const [comments, setComments] = useState("");

   const navigate = useNavigate();

    const handleDateChange = (e) => {
        setDate(e.target.value);
        const newDate = new Date(e.target.value);
        props.dispatch(newDate);
        document.getElementById("time").innerHTML =
        props.availableTimes.reduce((tmp, x) => `${tmp}<option>${x}</option>`, '');
     }



    const printError = (errorLoc, errorMsg) => {
        document.getElementById(errorLoc).innerHTML = errorMsg;
     }

     const validateForm = () => {
        var isValidEntries = true;
        if(document.getElementById("fName").value === "") {
            printError("fNameError", "Please enter first name");
            isValidEntries = false;
        } else {
            printError("fNameError", "");
        }
        if(document.getElementById("lName").value === "") {
            printError("lNameError", "Please enter last name");
            isValidEntries = false;
        } else {
            printError("lNameError", "");
        }
        if(document.getElementById("eAddress").value === "") {
            printError("eAddressError", "Please enter email address");
            isValidEntries = false;
        } else {
            printError("eAddressError", "");
        }
        if(document.getElementById("phNum").value === "") {
            printError("phNumError", "Please enter phone number");
            isValidEntries = false;
        } else {
            printError("phNumError", "");
        }
        if(document.getElementById("date").value === "") {
            printError("dateError", "Please enter date");
            isValidEntries = false;
        } else {
            printError("dateError", "");
        }
        if(document.getElementById("time").value === "") {
            printError("timeError", "Please enter time");
            isValidEntries = false;
        } else {
            printError("timeError", "");
        }
        if(document.getElementById("guests").value === "") {
            printError("guestsError", "Please enter number of guests");
            isValidEntries = false;
        } else {
            printError("guestsError", "");
        }
        return isValidEntries;
     }


     const handleSubmit = (e) => {
       e.preventDefault();
       if(validateForm()) {
            if(props.submitForm(new FormData(document.reservationForm))) {
               navigate("/confirmed-booking");
            }
       }
     }

    return (
        <div  className="formDiv">
             <form name="reservationForm" style = {{display:"grid",maxwidth:200,gap:10}}
                  onSubmit={handleSubmit}
                  className="bookingForm">

                 <br></br>
                <label htmlFor="fName">First Name <label className="reqLabel">*required</label> </label>
                <div className="errorDiv" id="fNameError"></div>
                <input type="text" id="fName" placeholder="First Name" data-testid="fName"
                         minLength={2} maxLength={50}
                         aria-label={"First Name"} aria-required="true"
                        value={fName} onChange={e=>setFName(e.target.value)}/>

                <br></br>
                <label htmlFor="lName">Last Name <label className="reqLabel">*required</label></label>
                <div className="errorDiv" id="lNameError"></div>
                <input type="text" id="lName" placeholder="Last Name" data-testid="lName"
                         minLength={2} maxLength={50}
                         aria-label={"Last Name"} aria-required="true"
                        value={lName} onChange={e=>setLName(e.target.value)}/>

                <br></br>
                <label htmlFor="eAddress">Email Address <label className="reqLabel">*required</label></label>
                <div className="errorDiv" id="eAddressError"></div>
                <input type="email" id="eAddress" placeholder="Email Address"
                         minLength={4} maxLength={200}
                         aria-label={"Email Address"} aria-required="true"
                        value={eAddress} onChange={e=>setEAddress(e.target.value)}/>


                <br></br>
                <label htmlFor="phNum">Phone Number <label className="reqLabel">*required</label></label>
                <div className="errorDiv" id="phNumError"></div>
                <input type="number" id="phNum" placeholder="Phone Number"
                        aria-label={"Phone Number"} aria-required="true"
                        value={phNum} onChange={e=>setPhNum(e.target.value)}/>

                <br></br>
                <label htmlFor="date">Choose date <label className="reqLabel">*required</label></label>
                <div className="errorDiv" id="dateError"></div>
                <input type="date" id="date"  data-testid="date"
                        aria-label={"Date"} aria-required="true"
                        value={date} onChange ={handleDateChange}/>

                <br></br>
                <label htmlFor="time">Choose time <label className="reqLabel">*required</label></label>
                <div className="errorDiv" id="timeError"></div>
                <select id="time" aria-label={"time"} aria-required="true">
                    <option id="items"></option>
                </select>

                <br></br>
                <label htmlFor="guests">Number of guests <label className="reqLabel">*required</label></label>
                <div className="errorDiv" id="guestsError"></div>
                <input type="number" min="1" max="10" id="guests"
                        placeholder="1" aria-label={"guests"} aria-required="true"
                       value={guests} onChange={e=>setGuests(e.target.value)}/>

                <br></br>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" aria-label={"occasion"} aria-required="true"
                        value={occasion} onChange={e=>setOccasion(e.target.value)}>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>

                <br></br>
                <label htmlFor="comments">Additional Comments</label>
                <textarea id="comments" rows={8} cols={50}
                          aria-label={"comments"} aria-required="true"
                          placeholder="Additional Comments" value={comments}
                          onChange={(e) => setComments(e.target.value)}
                ></textarea>

                <br></br>
                <input id="bookingButton" type="submit" value="Book your table"
                aria-label={"button"} aria-required="true"/>

            </form>

        </div>
    );
}

export default BookingForm;