import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  //AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
//import { SiLeetcode } from "react-icons/si";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Jisha Sree A </span>
                 and I'm from <span className="yellow"> Coimbatore,Tamil Nadu.</span>
                <br />
                <br />
                I am currently pursuing Bachelors Degree in the stream of Electronics and Communication Engineering.
                <br />
                <br />
                  As a
                  <b className="yellow">Software</b>Engineer,  
                  I'm passionate about confronting new challenges head-on and consistently enhancing my skillset
                  <br />
                  <br />I am proficient in
                    <b className="yellow"> Full stack developement with cloud-DevOps, </b>
                    as well as have knowledge in programming languages such as Java,Python and well known front-end-languages.
                  <br />
                  <br />
                  I have a passion for working
                  with <b className="yellow">cloud-AWS tools</b>
                  &nbsp; like
                  <i>
                    <b className="yellow"> Kubernetes,Jenkins,Docker Hub,Github actions.</b>
                  </i>
                  I have trained in for working
                  with <b className="yellow">cloud-AWS services</b>
                  &nbsp; like
                  <i>
                    <b className="yellow">IAM,EC2,s3,Lambda,Dynamo db,Terraform</b>
                  </i>
                  <br />
                  <br />
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/jishasree27"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/jisha-sree-a-173433269/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About
