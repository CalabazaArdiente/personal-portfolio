import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import vai from "../assets/img/vai-2.png";
import picap from "../assets/img/picap.png";
import sonos from "../assets/img/sonos.png";
import counter from "../assets/img/counter.png";
import yesNo from "../assets/img/yesNo.png";
import filoTalk from "../assets/img/filoTalk.png";
import portfolio from "../assets/img/portfolio.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "VAI Community",
      description: "A carpooling app made with flutter, Django and FastAPI",
      imgUrl: vai,
      source:{playStore: 'https://play.google.com/store/apps/details?id=co.com.vai.app', appStore: 'https://play.google.com/store/apps/details?id=co.com.vai.app', gitHub: ''},
    },
    {
      title: "Counter",
      description: " A simple flutter app that allows you to increment and decrement a number by clicking on buttons",
      imgUrl: counter,
      source:{playStore: '', appStore:'', gitHub:'https://github.com/Isveth/counter'},
    },
    
    {
      title: "FiloTalk",
      description: "An app meant to be a platform for philosophical discussions and debates, (In stores soon!)",
      imgUrl: filoTalk,
      source:{playStore: '', appStore:'', gitHub:'https://github.com/Isveth/chat'},
    },
    {
      title: "Yes/No App",
      description: "A chat to have fun with, letting the randomness of the universe answere your questions",
      imgUrl: yesNo,
      source:{playStore: '', appStore:'', gitHub:'https://github.com/Isveth/yes_no_app'},
    },
    {
      title: "Sonos",
      description: "An app for setting up and controlling Sonos' devices",
      imgUrl: sonos,
      source:{playStore: 'https://play.google.com/store/apps/details?id=com.sonos.acr2', appStore: 'https://apps.apple.com/us/app/sonos/id1488977981?ls=1', gitHub: ''} ,
    },
    {
      title: "Portfolio",
      description: "Design & Development",
      imgUrl: portfolio,
      source:{playStore: '', appStore:'', gitHub:'https://github.com/Isveth/personal-portfolio/tree/master'},
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p> The first tab contains my most recent projects, some of them are already on production (you can download them!!), while others rest in my GitHub, waiting to see the lights of the stores</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
