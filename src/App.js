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


      {/* ---------HEADER--------- */}
      <section className="header">
        <div className="main-Header">
          <div>
            <h5>Hello</h5>
            <h1>I'm Juan Bolmey</h1>
            <h4>Web Developer</h4>
          </div>
          {/* IMG JUAN */}
          <h1>NOthing</h1>
        </div>
      </section>

      {/* ---------HEADER END--------- */}


      {/* ---------ABOUT ME--------- */}
      <section className="aboutMe">
        <img></img>
        <div className="text-box">
          <h2>About Me</h2>
          <div className="accent"></div>
          <p>
            I attended Broward College pursuing
            my Bachelors Degree in Computer Science,
            while attending I took a class that taught
            me how to code Python... immediately I fell
            in love with programming. I decided to give
            this class my all and ended up with the
            highest grade in the class. Once the semester
            was over I decided that I was going to pursue
            my passion of coding and go to a bootcamp.
            I put my work, school, and life aside and
            attended Ironhack Full time. Once I completed
            my 9 weeks course at Ironhack I decided to
            start on projects and volunteer at Make it
            MVP to gain real life experience and work
            on projects with other developers. I am
            currently on the hunt for a position as a
            web developer.
          </p>
          <button>View CV</button>
        </div>
      </section>
      {/* ---------ABOUT ME END--------- */}

      {/* ---------PROJECTS--------- */}
      <h2>Latest Projects</h2>


      {/* ---------PROJECTS END--------- */}

    </div>
  );
}

export default App;
