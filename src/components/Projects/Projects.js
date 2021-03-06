import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import guru from "../../Assets/Projects/guru.png";
import att from "../../Assets/Projects/att.png";

import Rest from "../../Assets/Projects/rest.png";

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
              imgPath={att}
              isBlog={false}
              title="Attendance Management system using facial Recognition"
              description="The system maintains a quick and accurate record of the student/employee attendance and provides timely summaries and records whenever needed. Automation of the attendance system frees the authorities from mundane tasks and saves time. Face recognition algorithms can extract features from a face image namely positions of forehead, eyes, nose, mouth, chin, jaws."
              link="https://github.com/namanchitkara1/Face-recognition-system-in-attendance-managmet-system-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rest}
              isBlog={false}
              title="Restaurant website "
              description="The Website Consist of Menu ,chef details ,feedback form and the restaurant description & location Also, comes with reserve table online feature "
              link="https://chitkaras.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guru}
              isBlog={false}
              title="Theguruway.com"
              description="TheGuruway.com is An ERP solution provider in which Made the frontend part of the website using React.Js
              -Internship project done at forklyft"
              link="https://theguruway.com"
            />
          </Col>

         
       
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
