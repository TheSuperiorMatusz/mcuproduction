import React, { useState, useEffect } from 'react';
import defaultRequest from "../default-request";


export interface TvShow{
    id: number;
    title: string;
    release_date: string;
    last_aired_date	: string;
    season:number;
    number_episodes:number;
    overview:string;
    cover_url:string;
    trailer_url:string;
    directed_by:string;
    phase:string;
    saga:string;
    imdb_od:string;
}

interface Props {
    endpoint: string;
    onDataFetched: (data: TvShow [] | null) => void;
}

const MovieFetcher: React.FC<Props> = ({ endpoint, onDataFetched }) => {
    const [, setData] = useState<TvShow [] | null>(null);

    useEffect(() => {
        defaultRequest.get(endpoint)
            .then(response => {
                const fetchedData = response.data.data;
                setData(fetchedData);

                onDataFetched(fetchedData);
            })
            .catch(error => {
                console.log(error);
                onDataFetched(null);
            });
    }, [endpoint]);

    return <div />
}

export default MovieFetcher;