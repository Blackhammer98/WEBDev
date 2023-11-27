import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getMovieById } from "../api/movie";

const useMovieDetailHook = ()=>{

    const  { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchMovieDetails = async () => {

        const response = await getMovieById(movieId);
        setMovieDetails(response.data);
        setIsLoading(false)

    }


    useEffect( ()=> {
    fetchMovieDetails();
}, [])


return {isLoading,movieDetails};
}




export {useMovieDetailHook};