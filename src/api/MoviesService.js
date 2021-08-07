import axios from 'axios';

const API_KEY = process.env.REACT_APP_THE_MOVIE_DB_KEY;
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`

export class MoviesService {
    static getMovies() {
        return axios(withBaseUrl('movie/popular'));
    }
    static getMovieDetail(id) {
        return axios(withBaseUrl(`movie/${id}`));
    }
}