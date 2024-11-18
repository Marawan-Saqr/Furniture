import Spinner from 'react-bootstrap/Spinner';
import './Spinner.css';

const SpinnerLoading = () => {
  return (
    <div className='spinner-container d-flex justify-content-center align-items-center pt-5 pb-5'>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default SpinnerLoading;
