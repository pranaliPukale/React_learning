import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import my from '../my.jpeg';
const NavComponent=()=>{
  const navigate = useNavigate();
  const logOut = ()=>{
    sessionStorage.removeItem('auth');
    navigate('/login');
  }
 return(
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={my} width='30' height='30' className="d-inline-block align-top"></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/User">User Form</Nav.Link>
            <Nav.Link href="/User-List">User List</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <div className="float-end">
      <Button variant="dark" onClick={logOut}>Logout</Button>

      </div>
          </Nav>
        </Container>
    </Navbar>
 );
}
export default NavComponent;