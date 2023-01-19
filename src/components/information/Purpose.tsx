import React from 'react';
import  '../../assets/styles/information/Purpose.css'

const Purpose = () => {
    return (
        <div id="purpose">
            <div className="imageContainer">
                <img src={require('../../assets/images/comics.jpg')} alt="Comics" />
            </div>
            <div className="textContainer">
                <h2 className="title">Purpose of this site</h2>
                <p className="paragraph">As a big fan of comics and films based on them, I have always enjoyed watching the Marvel Cinematic Universe movies.
                    I created this site as a way for fans to have a one-stop destination for all things related to the MCU.
                    Whether you're a newbie just getting into the films or a hardcore fan looking for more information, this site has something for everyone.
                    The chronological order of films and TV shows, as well as the phases of the MCU, can be found here.
                    Additionally, this project is a part of a framework course, which was my motivation to create this kind of page.
                    The concept of the Marvel Cinematic Universe is an interesting one and it's fascinating to see how all the films and TV shows connect together.
                    The history of superhero films, especially Marvel films, is also a topic of interest for many fans.
                    With this website, I hope to provide a comprehensive guide for fans to explore and enjoy the world of the MCU.
                </p>
            </div>
        </div>
    );
};

export default Purpose;