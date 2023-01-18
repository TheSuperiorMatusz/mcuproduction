import React from 'react';

import styles from './MovieItem.module.css';
import { Movie } from '../../../../services/apiInterfaces/MovieInterface';

interface MovieProps {
  movie: Movie;
}

export const MovieItem = ({
  movie: { id, cover_url, title, overview,phase, box_office},
}: MovieProps) => {

    const checkOverview = (overview:string) => {
        if(overview===null){
            return 'To be announced'
        }
        return overview
    }

  return (
    <div className={styles.movieContainer} key={id}>
      <div className={styles.imageContainer}>
        <img src={cover_url} alt={title} />
      </div>
      <div>
        <h1>{title}</h1>
        <h2>Description</h2>
        <p className={styles.overviewContainer}>{checkOverview(overview)}</p>
        <h2>Phase: {phase}</h2>
        <h2>Box office: {box_office} $</h2>
      </div>
    </div>
  );
};
