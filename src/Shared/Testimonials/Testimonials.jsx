import axios from 'axios';
import SpinnerLoading from '../Spinner/Spinner';
import { useState, useEffect } from 'react';
import personImage from './person-1.png';
import './Testimonials.css';

const Testimonials = () => {
  const [personReview, setPersonReview] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPersonReview = async () => {
    await axios.get("https://veil-flicker-piano.glitch.me/reviews").then((response) => setPersonReview(response.data));
    setLoading(false);
  }

  useEffect(() => {
    getPersonReview();
  }, []);

  return (
    <div className="Testimonials pt-5 pb-5">
      <h2 className="text-center">Testim<span style={{color: '#f9bf29'}}>onials</span></h2>
      <div className="container">
        {loading ? (
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <SpinnerLoading />
            </div>
          </div>
        ) : (
          <div className="row justify-content-center">
            {personReview.map((review) => (
              <div className='col-md-8' key={review.id}>
                <div className="content text-center">
                  <p>{review.description}</p>
                  <img src={personImage} alt="person" />
                  <h5>{review.name}</h5>
                  <h6>{review.title}</h6>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
