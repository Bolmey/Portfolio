import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import headerImg from './img/JuanPort.png';
import aboutMeImg from './img/juanabout.png';


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
          <div className="headerText">
            <h5>Hello</h5>
            <h1>I'm Juan Bolmey</h1>
            <h4>Web Developer</h4>
          </div>
          {/* <img className="headerImg" src={headerImg} /> */}
        </div>
      </section>

      {/* ---------HEADER END--------- */}


      {/* ---------ABOUT ME--------- */}
      <section className="aboutMe">
        <div className='aboutMeContainerMobile'>
          <div></div>
          <h2>About Me</h2>
          <div className="accent"></div>
          <div></div>
          <div className="imgContainer">
            <img className='aboutMeImage' src={aboutMeImg} />
          </div>
          <div className="text-box">
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
        </div>
        <div className='aboutMeContainer'>

          <div>
            <div className="imgContainer">
              <img className='aboutMeImage' src={aboutMeImg} />
            </div>
          </div>

          <div>
            <h2>About Me</h2>
            <div className="accent"></div>
            <div className="text-box">
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
          </div>
        </div>
      </section>
      {/* ---------ABOUT ME END--------- */}

      {/* ---------PROJECTS--------- */}
      <section className="project">
        <div className='projectContainerMain'>
          <h2>Latest Projects</h2>
          <div className="accent"></div>
          <div className='project-container'>
            <div className="projects-Box">
              <h4>Dev Lane</h4>
              <h6>Technologies</h6>
              <i className="fab fa-github"></i>
            </div>
            <div className="projects-Box">
              <h4>Monopoly</h4>
              <h6>Technologies</h6>
              <i className="fab fa-github"></i>
            </div>
            <div className="projects-Box">
              <h4>Juan B</h4>
              <h6>Technologies</h6>
              <i className="fab fa-github"></i>
            </div>
            <div className="projects-Box">
              <h4>Bad Bunny</h4>
              <h6>Technologies</h6>
              <i className="fab fa-github"></i>
            </div>
          </div>
        </div>
      </section>

      {/* ---------PROJECTS END--------- */}

    </div>
  );
}

export default App;
