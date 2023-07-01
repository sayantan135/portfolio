import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I am an enthusiastic and motivated third-year undergraduate student pursuing a B.Tech in Computer Science Engineering. My expertise lies in web development, where I have experience building web applications using React and proficiency in HTML, CSS, and JavaScript. I also have practical knowledge in cloud computing, working with AWS and Azure to deploy applications and configure scalable architectures. Additionally, I have a keen interest in machine learning and am familiar with various algorithms and techniques. I am currently seeking internships or part-time positions to enhance my skills and contribute to impactful projects. I am excited to collaborate with professionals and fellow enthusiasts to create something extraordinary together.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Web Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Cloud Computing
            </li>
            <li className="about-activity">
              <ImPointRight /> Machine Learning
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          " Success is walking from failure to failure with no loss of enthusiasm"{" "}
          </p>
          <footer className="blockquote-footer"> Winston Churchill</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
