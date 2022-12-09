import { Navbar, Container, Nav } from "react-bootstrap";
import my from '../my.jpeg';
const NavComponent=()=>{
 return(
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={my} width='30' height='30' className="d-inline-block align-top"></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">User Form</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
 );
}
export default NavComponent;