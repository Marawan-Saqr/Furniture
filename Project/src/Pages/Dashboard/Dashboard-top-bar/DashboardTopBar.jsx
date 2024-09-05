import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ButtonDetails from '../../../Shared/Styled-components/StyledComponents';
import { Link } from 'react-router-dom';

const DashboardTopBar = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand style={{fontWeight: 'bold', fontStyle: 'italic'}}>Furniture <span style={{color: '#f9bf29'}}>Dashboard</span></Navbar.Brand>
          <Nav className="ms-auto">
            <Link to={"/home"}>
              <ButtonDetails>Back To Home</ButtonDetails>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
export default DashboardTopBar;