import flutter from "../assets/img/Flutter.svg";
import react from "../assets/img/React.svg";
import angular from "../assets/img/Angular.svg";
import c from "../assets/img/C.svg";
import django from "../assets/img/Django.svg";
import go from "../assets/img/Go.svg";
import clojure from "../assets/img/Clojure.svg";
import firebase from "../assets/img/Firebase.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Besides being great at communicating and getting along with my team, <br></br> I have honed my skills in various programming languages and frameworks throughout my professional and academic journey.<br></br>The technologies I have used the most include:</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={flutter} alt="Image" />
                                <h5>Flutter</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React & React Native</h5>
                            </div>
                            <div className="item">
                                <img src={django} alt="Image" />
                                <h5>Django</h5>
                            </div>
                            <div className="item">
                                <img src={angular} alt="Image" />
                                <h5>Angular</h5>
                            </div>
                            <div className="item">
                                <img src={c} alt="Image" />
                                <h5>C# & .NET</h5>
                            </div>
                            <div className="item">
                                <img src={go} alt="Image" />
                                <h5>Golang</h5>
                            </div>
                            <div className="item">
                                <img src={clojure} alt="Image" />
                                <h5>Clojure</h5>
                            </div>
                            <div className="item">
                                <img src={firebase} alt="Image" />
                                <h5>Firebase</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
