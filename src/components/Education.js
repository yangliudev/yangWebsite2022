import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Education = () => {
  return (
    <EducationDiv>
      <Topic>Education</Topic>
      <Row>
        <Col>
          <p>Simon Fraser University</p>
          <p>BSc. Data Science</p>
        </Col>

        <Col>
          <p>Jan 2022 - Jan 2025 (Expected)</p>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <p>British Columbia Institute of Technology</p>
          <p>Diploma in Information Technology</p>
        </Col>

        <Col>
          <p>Jan 2019 - Jan 2021</p>
        </Col>
      </Row>
    </EducationDiv>
  );
};

const EducationDiv = styled.div`
  margin-top: 40px;
`;

const Topic = styled.p`
  font-size: 1.75em;
  text-decoration: underline;
`;

export default Education;
