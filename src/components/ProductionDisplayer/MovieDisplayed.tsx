import React, {useState} from 'react';
import {Movie} from "../../services/dataFetcher/MovieFetcher";
import '../../assets/styles/ProductionDisplayed.css'

interface Props {
    data: Movie[] | null;
}

const MovieDisplayed: React.FC<Props> = ({ data }) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    console.log(currentSlide)
    console.log(data?.length)
    if (!data) {
        return <div>No data to display</div>;
    }

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const nextSlide = () => {
        if (currentSlide < data.length - 1) {
            setCurrentSlide(currentSlide + 1);

        }
    };

    function showCurrentSlide() {
        console.log(currentSlide)
    }

    return (
        <div className="DataDisplayer-slider-container">
            <button onClick={prevSlide} disabled={currentSlide === 0}>Prev</button>
            <div className="DataDisplayer-slides-container">
                {data.map((movie: Movie, index: number) => (

                    <div key={movie.id} className={`DataDisplayer-slide ${index === currentSlide ? 'active' : ''}`}>
                        <p>{index}</p>
                        {movie.id}
                        <p>{currentSlide}</p>
                        <h2>{movie.title}</h2>
                        <p>Released in {movie.release_date}</p>
                    </div>
                ))}
            </div>
            <button onClick={nextSlide} disabled={currentSlide === data.length - 1}>Next</button>
            <button onClick={showCurrentSlide}>Show</button>
        </div>
    );
};


export default MovieDisplayed;