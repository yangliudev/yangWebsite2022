import React from "react";

import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "../components/Layout/layout";

import Profile from "../components/Profile";
import PersonalProjects from "../components/PersonalProjects";
import Education from "../components/Education";

import WorkExperience from "../components/WorkExperience";

const IndexPage = () => {
  return (
    <Layout>
      <Container>
        <title>Yang Liu</title>

        <Profile />

        <Row>
          <Col>
            <WorkExperience />
          </Col>
          <Col>
            <Education />
          </Col>
        </Row>

        <PersonalProjects />
      </Container>
    </Layout>
  );
};

export default IndexPage;
