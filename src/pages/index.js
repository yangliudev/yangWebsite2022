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

        <PersonalProjectsDiv>
          <Topic>Work Experience</Topic>
          <PhoneBox />
          <br />
          <TedxAbbotsford />
          <br />
          <Isaca />
        </PersonalProjectsDiv>

        <PersonalProjects />

        <Education />
      </Container>
    </Layout>
  );
};

// Styled Components

const PersonalProjectsDiv = styled.div`
  width: 50%;
`;

const Topic = styled.p`
  font-size: 1.75em;
  text-decoration: underline;
`;

const MyContainer = styled(Container)`
  // margin-top: 10px;
`;

export default IndexPage;
