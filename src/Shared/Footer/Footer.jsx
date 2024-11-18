import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='pt-5'>
      <div className="container">
        <h2>
        <Link to='/' className="navbar-brand" style={{fontStyle:'italic', fontWeight: 'bold'}}>FURNI<span style={{color: '#f9bf29'}}>TURE</span></Link>
        </h2>
        <div className="row align-items-center">
          <div className='col-md-4'>
            <div className="left">
              <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>
            </div>
          </div>
          <div className='col-md-8'>
            <div className="right">
              <div className="row">
                <div className='col-md-6 col-lg-3'>
                  <div className="box">
                    <ul>
                      <h5 style={{color: 'black', fontStyle: 'italic', fontWeight: 'bold'}}>Main <span style={{color: '#f9bf29'}}>Links</span></h5>
                      <Link to={"/home"} style={{color: '#fff', textDecoration: 'none'}}>
                        <li>Home</li>
                      </Link>
                      <Link to={"/shop"} style={{color: '#fff', textDecoration: 'none'}}>
                        <li>Shop</li>
                      </Link>
                      <Link to={"/about"} style={{color: '#fff', textDecoration: 'none'}}>
                        <li>About Us</li>
                      </Link>
                      <Link to={"/services"} style={{color: '#fff', textDecoration: 'none'}}>
                        <li>Services</li>
                      </Link>
                      <Link to={"/blog"} style={{color: '#fff', textDecoration: 'none'}}>
                        <li>Blog</li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className='col-md-6 col-lg-3'>
                  <div className="box">
                    <ul>
                      <h5 style={{color: 'black', fontStyle: 'italic', fontWeight: 'bold'}}>Dash<span style={{color: '#f9bf29'}}>board</span></h5>
                      <Link to={"/dashboard"} style={{color: '#fff', textDecoration: 'none'}}>
                        <li>Dashboard</li>
                      </Link>
                      <Link to={"/dashboard/all-products"} style={{color: '#fff', textDecoration: 'none'}}>
                        <li>Products DB</li>
                      </Link>
                      <Link to={"/dashboard/add-products"} style={{color: '#fff', textDecoration: 'none'}}>
                        <li>Add Products DB</li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='social-links'>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin-in"></i>
        </div>
        <hr style={{color: '#fff'}} />
        <div className='last-footer'>
          <div className="container">
            <div className="row align-items-center">
              <div className='col-md-6'>
                <div className="left">
                  <p>Copyright ©2024. All Rights Reserved. — Designed By Eng:Marawan Saqr</p>
                </div>
              </div>
              <div className='col-md-6'>
                <div className="right text-end">
                  <ul style={{display: 'flex', listStyleType: 'none', flexDirection: 'row-reverse'}}>
                    <li>Terms & Conditions</li>
                    <li style={{marginRight: '30px'}}>Privacy Policy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer;