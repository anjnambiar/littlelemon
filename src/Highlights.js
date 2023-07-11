import Card from './Card';
import './Highlights.css';

function Highlights() {
    return (
        <div className="Highlights">
            <section className="topSection">
                <h2 id="h2id">This week's specials!</h2>
                <button id="menubutton">Online Menu</button>
            </section>
            <section className="cardSection">
                <Card className = "dishCard"/>
                <Card className = "dishCard"/>
                <Card className = "dishCard"/>
            </section>
        </div>
    );
}

export default Highlights;