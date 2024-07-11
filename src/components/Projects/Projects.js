import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/chatify.png";//chatbot
import chatify from "../../Assets/Projects/vinayaka01.png";//vinayaka
import suicide from "../../Assets/Projects/codeEditor.png";
import bitsOfCode from "../../Assets/Projects/plantit01.png";//tendergarden

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
              imgPath={chatify}
              isBlog={false}
              title="vinayaka"
              description="dhoop stick and purfumery website i integrated whatsapp for order confirmation and other alerts"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Tender-garden"
              description="We've successfully developed a complete website from scratch, incorporating essential features such as a robust login system, seamless email integration, WhatsApp messaging capabilities, and a customized admin page. Furthermore, the website is securely hosted on AWS, ensuring reliability and scalability. "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Django-chatbot"
              description="I have integrated OpenAI with Django to develop a customized chatbot. The application is fully hosted and includes an authentication system for user management."
                           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Django-chatroom"
              description="I've developed a Django-based chatroom enabling 1-on-1 conversations, implemented entirely with Django code. The application includes a robust login system for user authentication and is securely hosted on AWS, ensuring reliability and scalability."
                           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
