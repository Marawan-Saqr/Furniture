import './Subscribe.css';
import sofaImage from './sofa.png';


const Subscribe = () => {
  return (
    <div className='subscribe pt-5 pb-5'>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className='col-md-12 col-lg-6'>
            <div className="left">
              <h5><i class="fa-regular fa-envelope"></i> Subscribe to <span style={{color: '#f9bf29'}}>Newsletter</span></h5>
              <div className='form-inputs'>
                <input type="text" placeholder='Enter Your Name' />
                <input type="text" placeholder='Enter Your Email' />
                <button><i class="fa-brands fa-slack"></i></button>
              </div>
            </div>
          </div>
          <div className='col-md-12 col-lg-5'>
            <div className="right">
              <img src={sofaImage} alt="sofa Image" className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Subscribe;