import React from 'react';
import styles from './Tvshow.module.css'
import {TvShow} from "../../../../services/apiInterfaces/SeriesInterface";

interface TvshowProps {
    show: TvShow
}
export const TvshowItem =({
    show:{id,cover_url,title,season,overview},
}: TvshowProps) =>{

    return (
        <div className={styles.showContainer} key={id}>
            <div className={styles.imageContainer}>
                <img src={cover_url} alt={title} />
            </div>
            <div>
                <h1>{title}</h1>
                <p className={styles.overviewContainer}>{overview}</p>
            </div>
        </div>
    )
};