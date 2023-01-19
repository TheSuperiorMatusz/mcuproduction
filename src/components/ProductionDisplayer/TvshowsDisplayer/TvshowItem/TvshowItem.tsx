import React from 'react';
import {TvShow} from "../../../../services/apiInterfaces/SeriesInterface";
import "../../../../assets/styles/ProductionDisplayer/Item/ShowItem.css"
interface TvshowProps {
    show: TvShow
}
export const TvshowItem =({
    show:{id,cover_url,title,season,overview},
}: TvshowProps) =>{

    return (
        <div className="productionContainer" key={id}>
            <div className="imageContainerItem">
                <img src={cover_url} alt={title} />
            </div>
            <div>
                <h1 className="heading-level">{title}</h1>
                <h2 className="heading-level">Season: {season}</h2>
                <h2 className="heading-level">Description</h2>
                <p className="text">{overview}</p>
            </div>
        </div>
    )
};