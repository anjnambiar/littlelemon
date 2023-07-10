import './App.css';
import Header from'./Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
       <header class="segment"><Header/></header>
       <main class="segment"><Main/></main>
       {/* <footer class="segment"><Footer/></footer> */}
    </div>
  );
}

export default App;
