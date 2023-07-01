import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Plantleavedieseasedectection from "../../Assets/Projects/leaf.png";
import twittersentiment from "../../Assets/Projects/emotion.png";
import KnowYourCrypto from "../../Assets/Projects/codeEditor.png";
import PostRunR from "../../Assets/Projects/chatify.png";
import rmc from "../../Assets/Projects/suicide.png";
import IEMEDUCHAT from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PostRunR}
              isBlog={false}
              title="PostRunR"
              description="PostRunrR is a clone of Postman API, which is a popular application programming interface that makes it easy for developers to create, share, test and document APIs. This is done by allowing the users to create and save simple and complex HTTP/s requests, as well as read their responses.
              "
              ghLink="https://github.com/sayantan135/PostRunR"
              demoLink="https://sayantan135.github.io/PostRunR/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IEMEDUCHAT}
              isBlog={false}
              title="IEM-EDU-CHAT"
              description="An academic-based chatbot where you can extract information about a particular sections like result, department, course, library as well as info about faculty, etc. This project is built using the Flask and AIML (Artificial Intelligence Markup Language) along with HTML and CSS in the frontend"
              ghLink="https://github.com/sayantan135/IEM-EDU-CHAT"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KnowYourCrypto}
              isBlog={false}
              title="Know-Your-Crypto"
              description="Know-Your-Crypto is a real-time web app that allows users to monitor cryptocurrency prices, set price alerts, and access interactive charts and news updates. It offers a customizable watchlist and a user-friendly interface for seamless tracking and informed decision-making."
              ghLink="https://github.com/sayantan135/crypto-tracker/tree/gh-pages"
              demoLink="https://sayantan135.github.io/crypto-tracker/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Plantleavedieseasedectection}
              isBlog={false}
              title="Plant Leave Disease Detection"
              description="A CNN Model To Detect Plant Diseases

              For Developing a Plant Diseases Detection, i use: Convolutional Neural Network, which is a class of deep neural networks, most applied to analysing visual imagery. its widely used in applications of image and video recognition."
              ghLink="https://github.com/sayantan135/Plant-Diseases-Detection-CNN"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rmc}
              isBlog={false}
              title="Routine-Management-System"
              description="A web application for tracking school or university schedules can be created using HTML, CSS, and JavaScript. HTML structures the pages, CSS styles the elements, and JavaScript provides interactivity for adding, editing, and deleting events. Users can easily manage their academic commitments in a user-friendly interface."
              ghLink="https://github.com/sayantan135/Routine-Management-System"
              demoLink="https://sayantan135.github.io/Routine-Management-System/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twittersentiment}
              isBlog={false}
              title="Sentiment-Analysis-and-Topic-Modeling-of-Russia-Ukraine-War-related-Tweets"
              description="The aim of this project is to collect Russia-Ukraine War-related tweets using the Twitter API and apply sentiment analysis and topic modeling techniques to gain insights into public opinion and discourse on this topic."
              ghLink="https://github.com/sayantan135/Sentiment-Analysis-and-Topic-Modeling-of-Russia-Ukraine-War-related-Tweets"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
