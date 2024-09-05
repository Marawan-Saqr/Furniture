import './WhyChooseUs.css';
import whyChooseUsImage from './why-choose-us.jpg';

const WhyChooseUs = () => {
  return (
    <div>
      <section className='why-choose-us pt-5 pb-5'>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-12 col-lg-6">
              <div className='left'>
                <div className="content pb-5">
                  <h2>Why Choose <span style={{color: '#f9bf29'}}>Us</span></h2>
                  <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                </div>
                <div className="row">
                  <div className='col-md-6'>
                    <div className="box">
                      <i className="fa-solid fa-truck"></i>
                      <h6>Fast & Free Shipping</h6>
                      <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className="box">
                      <i className="fa-solid fa-bag-shopping"></i>
                      <h6>Easy to Shop</h6>
                      <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className="box">
                      <i className="fa-regular fa-life-ring"></i>
                      <h6>24/7 Support</h6>
                      <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className="box">
                      <i className="fa-solid fa-angles-right"></i>
                      <h6>Hassle Free Returns</h6>
                      <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-12 col-lg-5'>
              <div className="right text-center">
                <img src={whyChooseUsImage} alt="whyChooseUs" className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default WhyChooseUs;