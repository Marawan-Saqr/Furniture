import './HomeCover.css';
import { Link } from 'react-router-dom';

const HomeCover = () => {
  return (
    <div className='home-cover'>
      <div className="container">
        <div className="content">
          <h1>Modern Interior Design <span>Studio</span></h1>
          <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
          <Link to={"/shop"}>
            <button className="first">Show Now</button>
          </Link>
          <Link to={"/services"}>
            <button className="last">Explore</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default HomeCover