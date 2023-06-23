import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import linkedin from "../assets/img/nav-icon1.svg";
import facebook from "../assets/img/nav-icon2.svg";
import git from "../assets/img/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/isveth-alfonso-ruiz-3a89a41b2/"><img src={linkedin} alt="Icon" /></a>
              <a href="https://github.com/Isveth"><img src={facebook} alt="Icon" /></a>
              <a href="https://github.com/Isveth"><img className="git-icon" src={git} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
