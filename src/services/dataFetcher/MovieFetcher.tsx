import React, { useState, useEffect } from 'react';
import defaultRequest from "../default-request";


export interface Movie{
    title: string;
    release_date: string;
    id: number;
    box_office:number;
    overview:string;
    cover_url:string;
    trailer_url:string
    directed_by:string;
    phase	:number;
    saga:string
    chronology:number;
    post_credit_scenes:number;
    imdb_id:string;
}

interface Props {
    endpoint: string;
    onDataFetched: (data: Movie [] | null) => void;
}

const MovieFetcher: React.FC<Props> = ({ endpoint, onDataFetched }) => {
    const [ , setData] = useState<Movie [] | null>(null);

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