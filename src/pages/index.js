import * as React from "react";

import styled from "styled-components";
import { Row, Col, Image, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import profile from "../images/profile.jpg";
import doggopedia from "../images/doggopedia.png";
import hungryHippos from "../images/hungry-hippos.png";

const IndexPage = () => {
  return (
    <Container>
      <title>Yang Liu</title>
      <TitleDiv>
        <Header>Hi, my name is Yang Liu</Header>
        <SubHeader>I am a Software Developer</SubHeader>
        <Image
          src={profile}
          style={{ width: "200px", borderRadius: "25px" }}
          alt="yang_profile_pic"
          fluid
        ></Image>
      </TitleDiv>
      <PersonalProjectsDiv>
        <Header>Work Experience</Header>
        <Text>PhoneBox</Text>
        <Text>
          - Collaborated with engineers and designers to develop a responsive
          cross-platform mobile application using React Native. Improved
          usability rate by approximately 33% by migrating self-serve services
          to a mobile environment.
          <br /> <br />- Individually managed and lead the development phases of
          the mobile application project from start to finish, which included
          working with design and development to testing and deployment.
          Currently there is approximately 11,200 active users using the app.
          <br /> <br />- Partnered with the development and design team to
          upgrade our current e-commerce website from a legacy framework to a
          modern one, by migrating from ASP.NET 4.5 to React with Gatsby.js and
          TypeScript. Beta version of the website was deployed with minimal
          issues.
          <br /> <br />- Updated and maintained existing projects with a user
          base of approximately 30,000 clients such as the self-serve (Vue.js)
          and e-commerce website (.NET), adding new and improving upon existing
          features including but not limited to a new authentication system,
          additional payment options, and UI changes.
          <br /> <br />- Worked with the SQL Server database to resolve various
          user data issues brought up by the customer service department, such
          as required modifications to a client's personal information resulting
          in improved data integrity and validity.
        </Text>
        <Text></Text>
      </PersonalProjectsDiv>
      <div>
        <Header>Personal Projects</Header>
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
                  various different dog breeds. Information was pulled using the
                  Wikipedia API.
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
                  want to eat. Restaurant information was pulled using the Yelp
                  API.
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
      <div>
        <Header>Education</Header>
        <Row>
          <Col>
            <Text>Simon Fraser University</Text>
            <Text>BSc. Data Science</Text>
          </Col>

          <Col>
            <Text>January 2022 - January 2025 (Expected)</Text>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Text>British Columbia Institute of Technology</Text>
            <Text>Diploma in Information Technology</Text>
          </Col>

          <Col>
            <Text>January 2019 - January 2021</Text>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

// Styled Components

const TitleDiv = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PersonalProjectsDiv = styled.div`
  width: 50%;
`;

const Header = styled.p`
  font-family: "Montserrat";
  font-size: 2em;
`;

const SubHeader = styled.p`
  font-family: "Montserrat";
  font-size: 1.2em;
`;

const Text = styled.p`
  font-family: "Montserrat";
`;

const HyperLink = styled.p`
  font-family: "Montserrat";
  color: blue;

  :hover {
    cursor: pointer;
  }
`;

export default IndexPage;
