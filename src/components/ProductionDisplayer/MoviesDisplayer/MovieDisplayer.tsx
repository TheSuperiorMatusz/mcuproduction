import React from 'react';
import styles from './MovieDisplayer.module.css';

import { useSlider } from '../ProductionSlider/useSlider';
import { MovieItem } from './MovieItem/MovieItem';
import api from '../../../services/default-request-database';
import { Movie } from '../../../services/apiInterfaces/MovieInterface';

interface FetchMoviesResponse {
  data: Movie[];
}

const fetchMovies = () => api.get<FetchMoviesResponse>('/movies');

export const MovieDisplayer = () => {
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const { currentSlideIndex, nextSlide, prevSlide } = useSlider({
    numberOfItems: movies.length-1,
  });

  React.useEffect(() => {
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
    <section className={styles.container}>
      <button onClick={prevSlide} className={styles.sliderButton}>
        Previous Film
      </button>
      <div className={styles.moviesContainer}>{renderMovies()}</div>
      <button onClick={nextSlide} className={styles.sliderButton}>
        Next film
      </button>
    </section>
  );
};
