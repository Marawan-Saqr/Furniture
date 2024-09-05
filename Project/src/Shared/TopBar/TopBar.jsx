import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom';


const TopBar = () => {
  return (
    <div>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" style={{borderBottom: '1px solid #f9bf29'}}>
        <Container>
          <Link to='/' className="navbar-brand" style={{fontStyle:'italic', fontWeight: 'bold'}}>FURNI<span style={{color: '#f9bf29'}}>TURE</span></Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Link className="nav-link" to='home'>Home</Link>
              <Link className="nav-link" to='shop'>Shop</Link>
              <Link className="nav-link" to='about'>About Us</Link>
              <Link className="nav-link" to='services'>Services</Link>
              <Link className="nav-link" to='blog'>Blog</Link>
              <Link className="nav-link" to='dashboard'>Dashboard</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
export default TopBar;
