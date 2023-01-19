import React from 'react';
import {TvShow} from "../../../../services/apiInterfaces/SeriesInterface";
import "../../../../assets/styles/ProductionDisplayer/Item/ShowItem.css"
interface TvshowProps {
    show: TvShow
}
export const TvShowItem =({
    show:{id,cover_url,title,season,overview,phase},
}: TvshowProps) =>{
    const checkOverview = (overview:string) => {
        if(overview===null){
            return 'To be announced'
        }
        return overview
    }
    return (
        <div className="productionContainer" key={id}>
            <div className="imageContainerItem">
                <img src={cover_url} alt={title} />
            </div>
            <div>
                <h1 className="heading-level">{title}</h1>
                <h2 className="heading-level">Season: {season}</h2>
                <h2 className="heading-level">Phase: {phase}</h2>
                <h2 className="heading-level">Description:</h2>
                <p className="text">{checkOverview(overview)}</p>
            </div>
        </div>
    )
};