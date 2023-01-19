import api from "../default-request-database";
import {Movie} from "../apiInterfaces/MovieInterface";

interface FetchMoviesResponse {
    data: Movie[];
}

export const fetchMovies = () => api.get<FetchMoviesResponse>('/movies');