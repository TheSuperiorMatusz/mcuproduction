import {TvShow} from "../apiInterfaces/SeriesInterface";
import api from "../default-request-database";

interface FetchTvShowResponse{
    data: TvShow[];
}
export const fetchTvShows = () => api.get<FetchTvShowResponse>('/tvshows')