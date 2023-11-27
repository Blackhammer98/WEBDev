import { useState } from 'react';
import { createMovie } from '../api/movie';

const useMovieCreateHook = () => {
    const [movieDetails, setMovieDetails] = useState({});
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");


    async function onCreateMovie(e) {
        setError("");

        e.preventDefault();

        try {
            const res = await createMovie(movieDetails);
            setMessage("Movie created successfully");
            window.location.href = "/";

        }
        catch (err) {
            setError(err.response.data.message);
            console.log("Error", err);
        }



    }

    return { movieDetails, setMovieDetails, onCreateMovie, error, message };

}
export  {useMovieCreateHook};