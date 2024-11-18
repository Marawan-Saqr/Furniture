import './AboutUsCover.css';
import { Link } from 'react-router-dom';

const AboutUsCover = () => {
  return (
    <div className='about-cover'>
      <div className="container">
        <div className="content">
          <h1>About <span>Us</span></h1>
          <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
          <Link to={"/shop"}>
            <button className="first">Shop Now</button>
          </Link>
          <Link to={"/services"}>
            <button className="last">Explore</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default AboutUsCover;