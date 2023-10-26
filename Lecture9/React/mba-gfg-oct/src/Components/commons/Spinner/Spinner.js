import Spinner from 'react-bootstrap/Spinner';

function BasicExample() {
    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center text-light">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
        
    );
}

export default BasicExample;