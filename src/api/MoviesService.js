import axios from 'axios';

const API_KEY  = '5adc50d69644c5c56d3ecb06cc87a4f5';
const BASE_URL = 'https://api.themoviedb.org/3/';                  
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {
    static getMovies() {
        return axios(withBaseUrl('movie/popular'));
    }

    static getMoviesById(id){
        return axios(withBaseUrl(`movie/${id}`));
    }
}