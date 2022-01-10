import React, { useState } from "react";

import { Row, Col, Image, Container } from "react-bootstrap";
import useCollapse from "react-collapsed";
import styled from "styled-components";

import ted from "../../images/ted.jpg";

const TedxAbbotsford = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
  });

  return (
    <>
      <Row
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <Col>
          <Row>
            <Col>
              <Image
                src={ted}
                style={{ width: "50px", borderRadius: "10px" }}
                alt="ted_pic"
                fluid
              ></Image>
            </Col>
            <Col>
              <Text>TedxAbbotsford</Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Text>September 2020 - December 2020</Text>
        </Col>
      </Row>
      <br />
      <section {...getCollapseProps()}>
        <Text>
          - Worked with a team of six to build a web based application using
          React with the MERN stack. The web application was a tool to help
          musicians find more job opportunities during Covid.
          <br /> <br /> - Designed algorithms for optimizing the client-musician
          pairing system, finding the best possible match by conditions such as
          distance, pricing, etc.
          <br /> <br /> - Implemented API’s for services such as Google Maps,
          distance calculation, and automated email deployment.
          <br /> <br /> - Project placed 2nd out of 19 others from majority
          votes by students, sponsors, and faculty.
        </Text>
      </section>
    </>
  );
};

const Text = styled.p`
  font-family: "Montserrat";
`;

export default TedxAbbotsford;
