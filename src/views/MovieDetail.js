import { useParams } from "react-router-dom"
import { MoviesService } from "../api/MoviesService";
import { useEffect, useState } from "react";

export const MovieDetail = () => {
    const { id } = useParams();

    const [movie, setMovie] = useState({});

    const fetchMovie = async () => {
        const { data } = await MoviesService.getMoviesById(id);
        setMovie(data);
    }

    useEffect(() => {
        fetchMovie();
    }, []);

    return (
        <>
            <h1>{movie.title}</h1>
            <article>
                {movie.overview}
            </article>
        </>
    )

}