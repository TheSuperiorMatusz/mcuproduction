import React, {useEffect, useState} from 'react';
import '../../../assets/styles/ProductionDisplayer/MovieDisplayer.css';
import { useSlider } from '../ProductionSlider/useSlider';
import { MovieItem } from './MovieItem/MovieItem';
import { Movie } from '../../../services/apiInterfaces/MovieInterface';
import {fetchMovies} from "../../../services/fetch/fetchMovies";


export const MovieDisplayer = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
  const { currentSlideIndex, nextSlide, prevSlide } = useSlider({
    numberOfItems: movies.length-1,
  });
    useEffect(() => {
        fetchMovies()
            .then((res) => setMovies(res.data.data))
            .catch((err) => console.error(err));
    }, []);

  const renderMovies = () => {
    return movies.map(
      (movie, index) =>
        index === currentSlideIndex && (
          <MovieItem key={movie.id} movie={movie} />
        )
    );
  };

  return (
    <section id="films-container">
      <button onClick={prevSlide} className="sliderButton">
        Previous Film
      </button>
      <div className="movies-container">{renderMovies()}</div>
      <button onClick={nextSlide} className="sliderButton">
        Next film
      </button>
    </section>
  );
};
