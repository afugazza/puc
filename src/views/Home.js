import { MoviesList } from "../components/MoviesList";
import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";
import { MoviesContainer } from "../styles/MoviesContainer";


export const Home = () => {

    const [movies, setMovies] = useState([]);
    const fetchMovies = async () => {
        const { data } = await MoviesService.getMovies();
        setMovies(data.results);
    }

    useEffect(() => {
        fetchMovies();
    }, []);
    return (
        <MoviesContainer>
            <MoviesList movies={movies} />
        </MoviesContainer>
    )
};