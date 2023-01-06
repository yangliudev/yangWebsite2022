import React from "react";

import styled from "styled-components";
import { Row, Col, Image, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "../components/Layout/layout";

import PhoneBox from "../components/PhoneBox";
import TedxAbbotsford from "../components/TedxAbbotsford";
import Isaca from "../components/Isaca";

import Profile from "../components/Profile";
import PersonalProjects from "../components/PersonalProjects";
import Education from "../components/Education";

const IndexPage = () => {
  return (
    <Layout>
      <Container>
        <title>Yang Liu</title>

        <Profile />

        <WorkExperienceDiv>
          <Topic>Work Experience</Topic>
          <br />
          <PhoneBox />
          <br />
          <TedxAbbotsford />
          <br />
          <Isaca />
        </WorkExperienceDiv>

        <PersonalProjects />

        <Education />
      </Container>
    </Layout>
  );
};

const WorkExperienceDiv = styled.div`
  width: 50%;
  margin-top: 40px;
`;

const Topic = styled.p`
  font-size: 1.75em;
  text-decoration: underline;
`;

export default IndexPage;
