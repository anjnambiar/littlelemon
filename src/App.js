import './css/App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import MainRouting from './MainRouting.js';


function App() {
  return (
    <div className="App">
       <header className="segment"><Header/></header>
       <main><MainRouting/></main>
       <footer className="segment"><Footer/></footer>
    </div>
  );
}

export default App;
