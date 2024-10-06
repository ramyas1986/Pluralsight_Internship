import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyNavbar() {
  return (
    <>
      <Navbar expand="sm" className="bg-body-tertiary p-2 mb-2 fixed-top d-flex align-items-center">
        <Container>
          <Navbar.Brand className="logo me-auto"><a href="/">Todoist<span>.</span></a></Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/#about">About</Nav.Link>
              <Nav.Link href="/#features">Features</Nav.Link>
              <NavDropdown title="Organize" id="basic-nav-dropdown">
                <NavDropdown.Item href="/newuser">New User</NavDropdown.Item>
                <NavDropdown.Item href="/newtodo">New Task</NavDropdown.Item>
                <NavDropdown.Item href="/displayusertodos">View User Tasks</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          
        </Container>
        
      </Navbar>
      <style jsx="true"> {`
.logo a {
  font-size: 30px;
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: #111111;
  text-decoration: none;
}

.logo a span {
  color: #e03a3c;
}


`}</style>
    </>
  );
}

export default MyNavbar;


