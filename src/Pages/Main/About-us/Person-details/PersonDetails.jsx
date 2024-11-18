import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SpinnerLoading from '../../../../Shared/Spinner/Spinner';
import personImage from './Person.jpg';

const PersonDetails = () => {
  const [personDetails, setPersonDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  const getPersonDetails = async () => {
    try {
      const response = await axios.get(`https://veil-flicker-piano.glitch.me/team/${params.personID}`);
      setPersonDetails(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params.personID) {
      getPersonDetails();
    }
  }, [params]);

  return (
    <div className="person-details-container">
      {loading ? (
        <div className="loading-container">
          <SpinnerLoading />
        </div>
      ) : (
        personDetails && (
          <div className="container">
            <div className="row align-items-center">
              <div className='col-md-6 p-3'>
                <img src={personImage} alt="person" className="img-fluid" />
              </div>
              <div className='col-md-6 p-3'>
                <h2>{personDetails.memberTeam}</h2>
                <h4>{personDetails.memberPosition}.00$</h4>
                <p>{personDetails.memberDescription}</p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default PersonDetails;
