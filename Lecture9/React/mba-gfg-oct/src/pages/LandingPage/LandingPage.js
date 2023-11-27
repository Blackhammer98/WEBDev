
import Spinner from "../../Components/commons/Spinner/Spinner";
import Header from "../../Components/Header/Header";
import "./LandingPage.css";
import { useLandingPageLogic } from "../../Hooks/useLandingPageHook";



function LandingPage(){

    const {isLoading,showMovies}=useLandingPageLogic();

    

    return <div className="bg-dark">

        <Header/>

        <h2  className="text-center fw-bolder px-2 text-light"> 
            Recommended Movies
        </h2>
     
     { 
        (isLoading) ? <Spinner/>: showMovies()

     }

    </div>
}


export default LandingPage;