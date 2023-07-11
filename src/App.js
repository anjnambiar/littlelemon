import './App.css';
import Header from'./Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import {Routes, Route, Router} from 'react-router-dom';
import AboutMe from './AboutMe.js';
import Menu from './Menu.js';
import Reservation from './Reservation.js';
import OrderOnline from './OrderOnline.js';
import Login from './Login.js';

function App() {
  return (
    <div className="App">
       <header class="segment"><Header/></header>
       <main>
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
          <Route path="/reservations" element={<Reservation/>}></Route>
        </Routes>
        <Routes>
          <Route path="/orderOnline" element={<OrderOnline/>}></Route>
        </Routes>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
        </main>
       <footer class="segment"><Footer/></footer>
    </div>
  );
}

export default App;
