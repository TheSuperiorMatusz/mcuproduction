import  {useEffect,useState} from 'react';
import { useSlider } from '../ProductionSlider/useSlider'
import {TvShow} from '../../../services/apiInterfaces/SeriesInterface';
import {TvShowItem} from './TvshowItem/TvShowItem';
import  '../../../assets/styles/ProductionDisplayer/Tsvhsow.css'
import {fetchTvShows} from "../../../services/fetch/fetchTvShows";


export const TvshowDisplayer = () => {
    const[tvShows, setTvshows] = useState<TvShow []>([]);
    const  {currentSlideIndex, nextSlide, prevSlide} = useSlider({
        numberOfItems: tvShows.length-1,
    });

    useEffect(() => {
        fetchTvShows()
            .then((res) => setTvshows(res.data.data))
            .catch((err) => console.error(err));
    }, []);

    const renderTvShows = () => {
        return tvShows.map(
            (tvShow,index) =>
        index === currentSlideIndex && (
            <TvShowItem show={tvShow} key={tvShow.id}/>
                )
        );
    };

    return(
        <section id="series-container">
            <button onClick={prevSlide} className="sliderButton">
               Previous Show
            </button>
            <div className="tvShowContainer">{renderTvShows()}</div>
            <button onClick={nextSlide} className="sliderButton">
                Next Show
            </button>
        </section>
    );
}