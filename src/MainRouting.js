
import './css/App.css';
import Main from './components/Main.js';
import AboutMe from './components/AboutMe.js';
import Menu from './components/Menu.js';
import BookingPage from './components/BookingPage.js';
import OrderOnline from './components/OrderOnline.js';
import Login from './components/Login.js';
import ConfirmedBooking from './components/ConfirmedBooking.js';
import {Routes, Route} from 'react-router-dom';

function MainRouting () {
    return (
        <div>
            <Routes>
                <Route className="segment" path="/" element={<Main/>}></Route>
            </Routes>
            <Routes>
                <Route path="/about-me" element={<AboutMe/>}></Route>
            </Routes>
            <Routes>
                <Route path="/menu" element={<Menu/>}></Route>
            </Routes>
             <Routes>
                <Route path="/bookingPage" element={<BookingPage/>}></Route>
            </Routes>
            <Routes>
                <Route path="/orderOnline" element={<OrderOnline/>}></Route>
            </Routes>
            <Routes>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
            <Routes>
                <Route path="/confirmed-booking" element={<ConfirmedBooking/>}></Route>
            </Routes>
        </div>
    );
}

export default MainRouting;