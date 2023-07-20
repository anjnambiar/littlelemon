import '../css/BookingPage.css'


function ConfirmedBooking () {

    return (
        <div className='confirmationPage'>
            <p className="confirmationMsg"> Your table is reserved !
            <br></br>
            <br></br>
            Thank you for choosing Little Lemon Restaurant.
            <br></br>
            See you soon !!
            </p>
            <br></br>
            <p id="changeMsg" className="confirmationMsg">Please call Little Lemon Restaurant for
                              any changes or to cancel your reservation.</p>
        </div>
    );
}

export default ConfirmedBooking;