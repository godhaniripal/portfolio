import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Godhani ripal </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />
            I am currently a student at dayananda sagar university.
            <br />
            I doing computer science engineering (cse) 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Amazon web services
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> learing automation in python 
            </li>
            <li className="about-activity">
              <ImPointRight /> trying new modules/libraries
            </li>
            <li className="about-activity">
              <ImPointRight /> reading algorithms
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The art of programming is the art of organizing complexity."{" "}
          </p>
          <footer className="blockquote-footer">Edsger Dijkstra</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
