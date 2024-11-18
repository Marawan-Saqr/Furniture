import './OurTeam.css';
import SpinnerLoading from '../../../../Shared/Spinner/Spinner';
import memberImage from './Person.jpg';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ButtonDetails from '../../../../Shared/Styled-components/StyledComponents';
import { Link } from 'react-router-dom';

const OurTeam = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllMembers = async () => {
    try {
      const response = await axios.get("https://veil-flicker-piano.glitch.me/team");
      setMembers(response.data);
    } catch (error) {
      console.error("Failed to fetch team members", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllMembers();
  }, []);

  return (
    <section className="our-team pt-5 pb-5">
      <h2 className='text-center pb-3'>Our <span>Team</span></h2>
      <div className="container">
        {loading ? (
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <SpinnerLoading />
            </div>
          </div>
        ) : (
          <div className="row">
            {members.map((member) => (
              <div className='col-md-6 col-lg-4 col-xl-3' key={member.id}>
                <div className="box">
                  <img src={memberImage} alt="member-image" className='img-fluid' />
                  <h4 className='pt-2 pb-2'>{member.memberTeam}</h4>
                  <h6>{member.memberPosition}</h6>
                  <p>{member.memberDescription}</p>
                  <Link to={`/about/person-details/${member.id}`}>
                    <ButtonDetails>Show Details</ButtonDetails>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default OurTeam;
