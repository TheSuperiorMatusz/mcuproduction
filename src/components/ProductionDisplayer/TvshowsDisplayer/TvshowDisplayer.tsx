import  {useEffect,useState} from 'react';
import api from '../../../services/default-request-database'
import { useSlider } from '../ProductionSlider/useSlider'
import {TvShow} from '../../../services/apiInterfaces/SeriesInterface';
import {TvshowItem} from './TvshowItem/TvshowItem';
import  '../../../assets/styles/ProductionDisplayer/Tsvhsow.css'

interface FetchTvShowResponse{
    data: TvShow[];
}
const fetchTvshows = () => api.get<FetchTvShowResponse>('/tvshows')
export const TvshowDisplayer = () => {
    const[tvShows, setTvshows] = useState<TvShow []>([]);
    const  {currentSlideIndex, nextSlide, prevSlide} = useSlider({
        numberOfItems: tvShows.length-1,
    });

    useEffect(() => {
        fetchTvshows()
            .then((res) => setTvshows(res.data.data))
            .catch((err) => console.error(err));
    }, []);

    const renderTvShows = () => {
        return tvShows.map(
            (tvShow,index) =>
        index === currentSlideIndex && (
            <TvshowItem show={tvShow} key={tvShow.id}/>
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