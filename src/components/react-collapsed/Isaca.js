import React, { useState } from "react";

import { Row, Col, Image, Container } from "react-bootstrap";
import useCollapse from "react-collapsed";
import styled from "styled-components";

import isaca from "../../images/isaca.png";

const Isaca = () => {
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
                src={isaca}
                style={{ width: "60px", borderRadius: "10px" }}
                alt="isaca_pic"
                fluid
              ></Image>
            </Col>
            <Col>
              <Text>ISACA</Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Text>January 2020 - May 2020</Text>
        </Col>
      </Row>
      <br />
      <section {...getCollapseProps()}>
        <Text>
          - Worked with a team of eight to develop a mobile app to advertise
          company events, similar to Eventbrite.
          <br /> <br />- Created wireframe designs of screens using Figma and
          developed UI of app using React Native with Expo.
          <br /> <br />- Project placed 1st out of 21 others from majority votes
          by students, sponsors, and faculty.
        </Text>
      </section>
    </>
  );
};

const Text = styled.p`
  font-family: "Montserrat";
`;

export default Isaca;
