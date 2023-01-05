import React from "react";

import styled from "styled-components";
import { Row, Col, Image, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import doggopedia from "../images/doggopedia.png";
import hungryHippos from "../images/hungry-hippos.png";

import Layout from "../components/Layout/layout";

import PhoneBox from "../components/PhoneBox";
import TedxAbbotsford from "../components/TedxAbbotsford";
import Isaca from "../components/Isaca";

import Profile from "../components/Profile";

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
        <br />
        <div>
          <Topic>Personal Projects</Topic>
          <Row>
            <Col sm={12} md={6}>
              <Row>
                <Col>
                  <Image
                    src={doggopedia}
                    style={{ width: "200px", borderRadius: "25px" }}
                    alt="doggopedia_pic"
                    fluid
                  ></Image>
                </Col>
                <Col>
                  <SubHeader>Doggopedia</SubHeader>
                  <Text>
                    An encyclopedia based app focused on teaching people about
                    various different dog breeds. Information was pulled using
                    the Wikipedia API.
                  </Text>
                  <HyperLink
                    onClick={() =>
                      window.open(
                        "https://play.google.com/store/apps/details?id=com.doggopedia&fbclid=IwAR2pRAyqk3Igr_6Bwld8pZye5_QlIgGaKokJtYYlx5lP7_NeanNAIyrTr4Y",
                        "_blank"
                      )
                    }
                  >
                    View App on Google Play
                  </HyperLink>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={6}>
              <Row>
                <Col>
                  <Image
                    src={hungryHippos}
                    style={{ width: "200px", borderRadius: "25px" }}
                    alt="hungryHippo_pic"
                    fluid
                  ></Image>
                </Col>
                <Col>
                  <SubHeader>Hungry Hippos</SubHeader>
                  <Text>
                    A food/drink mobile application to help you choose what you
                    want to eat. Restaurant information was pulled using the
                    Yelp API.
                  </Text>
                  <HyperLink
                    onClick={() =>
                      window.open(
                        "https://play.google.com/store/apps/details?id=com.HungryHippos&fbclid=IwAR32_nr8bVidEmqura2OcyU7e-6gzmOeCrt2uybWJkzrUHgQ6DHjAL_cn5E",
                        "_blank"
                      )
                    }
                  >
                    View App on Google Play
                  </HyperLink>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <br />
        <br />
        <div>
          <Topic>Education</Topic>
          <Row>
            <Col>
              <Text>Simon Fraser University</Text>
              <Text>BSc. Data Science</Text>
            </Col>

            <Col>
              <Text>Jan 2022 - Jan 2025 (Expected)</Text>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Text>British Columbia Institute of Technology</Text>
              <Text>Diploma in Information Technology</Text>
            </Col>

            <Col>
              <Text>Jan 2019 - Jan 2021</Text>
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  );
};

// Styled Components

const PersonalProjectsDiv = styled.div`
  width: 50%;
`;

const SubHeader = styled.p`
  font-size: 1.2em;
`;

const Topic = styled.p`
  font-size: 1.75em;
  text-decoration: underline;
`;

const Text = styled.p`
  font-family: "Montserrat";
`;

const HyperLink = styled.p`
  color: blue;

  :hover {
    cursor: pointer;
  }
`;

const MyContainer = styled(Container)`
  // margin-top: 10px;
`;

export default IndexPage;
