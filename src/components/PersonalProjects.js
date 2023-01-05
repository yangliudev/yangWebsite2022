import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";

import doggopedia from "../images/doggopedia.png";

const PersonalProjects = () => {
  return (
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
      </Row>
    </div>
  );
};

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

export default PersonalProjects;
