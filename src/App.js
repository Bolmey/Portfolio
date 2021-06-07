import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


function App() {
  return (
    <div className="App">
      {/* ---------NAV BAR--------- */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Juan Bolmey</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="https://www.linkedin.com/in/bolmey/">Linkedin</Nav.Link>
            <Nav.Link eventKey={2} href="https://github.com/Bolmey">
              Github
      </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* ---------NAV BAR END--------- */}
      <section>
        <div className="main-Header">
          <div>
            <h5>Hello</h5>
            <h1>I'm Juan Bolmey</h1>
            <h4>Web Developer</h4>
          </div>
          {/* IMG JUAN */}
        </div>
      </section>

    </div>
  );
}

export default App;
