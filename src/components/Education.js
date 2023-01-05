import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import styled from "styled-components";

const Education = () => {
  return (
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
  );
};

const Topic = styled.p`
  font-size: 1.75em;
  text-decoration: underline;
`;

const Text = styled.p`
  font-family: "Montserrat";
`;

export default Education;
