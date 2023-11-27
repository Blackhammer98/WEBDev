
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../../Components/Header/Header';
import { useMovieCreateHook } from '../../Hooks/useMovieCreateHook';

function MovieCretionPage() {

    const { movieDetails, setMovieDetails, onCreateMovie, error, message } = useMovieCreateHook();
     
   
    return (    
        <div>
            <Header />
             <div className='bg-dark d-flex text-light justify-content-center align-items-center flex-column'>
            

            <h1 className='text-success'> Add a new movie</h1>
            <Form onSubmit={onCreateMovie}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                        <Form.Control  onChange={(e)=>{setMovieDetails({...movieDetails,name:e.target.value})}}
                        value={movieDetails.name}type="text" placeholder="Enter Name" />

                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                        <Form.Control onChange={(e)=>{setMovieDetails({...movieDetails,description:e.target.value})}} 
                        value={movieDetails.description} type="text" placeholder="Enter Description" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>TrailerUrl</Form.Label>
                        <Form.Control onChange={(e) => { setMovieDetails({...movieDetails,trailerUrl:e.target.value }) }} 
                            value={movieDetails.trailerUrl} type="text" placeholder="Enter Url" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>PosterrUrl</Form.Label>
                        <Form.Control onChange={(e) => { setMovieDetails({...movieDetails,posterrUrl:e.target.value }) }} 
                            value={movieDetails.posterrUrl} type="text" placeholder="Enter Url" />
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>Language</Form.Label>
                        <Form.Control onChange={(e) => { setMovieDetails({...movieDetails,language: e.target.value})}} 
                        value={movieDetails.language}  type="text" placeholder="Enter Url" />
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>Release Status</Form.Label>
                        <Form.Control onChange={(e) => { setMovieDetails({...movieDetails,releaseStatus: e.target.value })}}
                            value={movieDetails.releaseStatus} type="text" placeholder="Enter Status" />
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>Release Date</Form.Label>
                        <Form.Control onChange={(e) => { setMovieDetails({...movieDetails, releaseDate:e.target.value }) }}
                            value={movieDetails.releaseDate} type="text" placeholder="Enter Date" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Director</Form.Label>
                        <Form.Control onChange={(e) =>{ setMovieDetails({...movieDetails,director:e.target.value }) }} 
                            value={movieDetails.director} type="text" placeholder="Enter Director" />
                </Form.Group>

                <Button variant="success" type="submit">
                    Submit
                </Button>

                <p className='text-danger'>{error}</p>
            </Form>
        </div>
 </div>

       
    );
}
export default MovieCretionPage;