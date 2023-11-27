import Header from "../../Components/Header/Header";
import  Spinner  from "../../Components/commons/Spinner/Spinner";
import ReactPlayer from "react-player";
import "./MovieDetail.css";
import {useMovieDetailHook} from "../../Hooks/useMovieDetailHook";

function MovieDetail(){

    const { isLoading, movieDetails } = useMovieDetailHook();

return <div>
<Header/>

<div>
        {(isLoading) ? <Spinner /> : <div className="bg-dark">

            <div className="box">
                <ReactPlayer url={movieDetails.trailerUrl} controls={true} className="video" width="70%" height="100%" />
            </div>

            <hr />
            <div className="bg-light d-flex  flex-column justify-content-center align-items-center" >
                <h3>{movieDetails.name}</h3>
                <h6>{movieDetails.director}</h6>
                <h6>{movieDetails.releaseDate}</h6>

            </div>

        </div>
        }
</div>


</div>


}

export default MovieDetail;