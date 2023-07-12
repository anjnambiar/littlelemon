import MarioandAdrian_A from '../images/MarioandAdrian_A.jpg';
import MarioandAdrian_b from '../images/MarioandAdrian_b.jpg';
import '../css/AboutMe.css';

function AboutMe() {
    return (
        <div className="AboutMe">
            <section className="aboutSection">
                <h1 id="about_h1">Little Lemon</h1>
                <h5 id="about_h5">Chicago</h5>
                <article id="Restaurant_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer at ex leo. Maecenas enim sem, laoreet at nulla ac,
                    luctus scelerisque massa. Praesent ut molestie nisi.
                     Aliquam arcu lorem, auctor condimentum blandit id, lobortis
                     in nisi. Ut diam justo, euismod in accumsan id, vehicula sit
                     amet tellus. Pellentesque porttitor elit lacus, vitae lacinia
                     magna ultricies quis. Etiam vitae tellus et mi hendrerit consequat.
                     In dictum ligula in elit euismod malesuada. Curabitur varius augue
                     id tempus ultricies. Mauris suscipit porta odio, et pretium nibh
                     scelerisque ut.</article>
            </section>
            <section className="imageSection">
                <img class="owner_img" id="img_b" src={MarioandAdrian_b} alt="Mario & Adrian"/>
                <img class="owner_img" id="img_a" src={MarioandAdrian_A} alt="Mario & Adrian"/>
            </section>
        </div>
    );
}

export default AboutMe;