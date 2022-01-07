import * as React from "react";

import styled from "styled-components";
import { Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import profile from "../images/profile.jpg";
import doggopedia from "../images/doggopedia.png";
import hungryHippos from "../images/hungry-hippos.png";

const IndexPage = () => {
  return (
    <div>
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
        <Text>Work Experience</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. q Vivamus
          feugiat sem erat. Vestibulum ultricies felis eleifend pretium mollis.
          Nunc facilisis, tortor eu euismod lacinia, lorem erat porta velit, et
          sagittis justo turpis vitae turpis. Nulla sapien mi, dictum vel quam
          ac, posuere consectetur nunc. Ut quam nisi, imperdiet ut risus at,
          dictum iaculis nisl. Aenean urna lacus, condimentum posuere aliquam
          sed, elementum vitae eros. Nulla nec ipsum convallis, pulvinar leo
          maximus, condimentum ante.
        </Text>
      </PersonalProjectsDiv>
      <div>
        <Text>Personal Projects</Text>
        <Row>
          <Col sm={12} md={6}>
            <Row>
              <Col>
                <Image
                  src={doggopedia}
                  style={{ width: "200px", borderRadius: "25px" }}
                  alt="yang_profile_pic"
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
                  alt="yang_profile_pic"
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
        <Text>Education</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          feugiat sem erat. Vestibulum ultricies felis eleifend pretium mollis.
          Nunc facilisis, tortor eu euismod lacinia, lorem erat porta velit, et
          sagittis justo turpis vitae turpis. Nulla sapien mi, dictum vel quam
          ac, posuere consectetur nunc. Ut quam nisi, imperdiet ut risus at,
          dictum iaculis nisl. Aenean urna lacus, condimentum posuere aliquam
          sed, elementum vitae eros. Nulla nec ipsum convallis, pulvinar leo
          maximus, condimentum ante.
        </Text>
      </div>
    </div>
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
