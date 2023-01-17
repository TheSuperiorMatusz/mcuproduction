
import React, {useState} from "react";
import {TvShow} from "../../services/dataFetcher/SeriesFetcher";

interface Props {
    data: TvShow[] | null;
}

const SeriesDisplayed: React.FC<Props> = ({ data }) => {
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


    return (
        <div className="DataDisplayer-slider-container">
            <button onClick={prevSlide} disabled={currentSlide === 0}>Prev</button>
            <div className="DataDisplayer-slides-container">
                {data.map((tvShow: TvShow , index: number) => (

                    <div key={tvShow.id} className={`DataDisplayer-slide ${index === currentSlide ? 'active' : ''}`}>
                        <p>{index}</p>
                        {tvShow.id}
                        <p>{currentSlide}</p>
                        <h2>{tvShow.title}</h2>
                        <p>Released in {tvShow.release_date}</p>
                    </div>
                ))}
            </div>
            <button onClick={nextSlide} disabled={currentSlide === data.length - 1}>Next</button>
        </div>
    );
};
export default SeriesDisplayed;