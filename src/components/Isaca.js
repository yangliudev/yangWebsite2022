import React, { useState } from "react";

import { Row, Col, Image, Container } from "react-bootstrap";
import useCollapse from "react-collapsed";
import styled from "styled-components";

import isaca from "../images/isaca.png";
import rightArrow from "../images/right-arrow.png";

const Isaca = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
  });

  const [isArrowRotated, setIsArrowRotated] = useState(false);

  const rotateArrow = () => {
    setIsArrowRotated(!isArrowRotated);
  };

  return (
    <div onClick={() => rotateArrow()}>
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
              ></Image>
            </Col>
            <Col>
              <Text>ISACA</Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <ArrowDiv>
            <Duration>Jan 2020 - May 2020</Duration>
            <MyImage
              src={rightArrow}
              style={{ width: "25px", marginLeft: "10px" }}
              alt="rightArrow_pic"
              isArrowRotated={isArrowRotated}
            ></MyImage>
          </ArrowDiv>
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
    </div>
  );
};

const Text = styled.p`
  font-family: "Montserrat";
`;

const Duration = styled.p`
  font-family: "Montserrat";
`;

const ArrowDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MyImage = styled.img`
  display: block;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;

  -webkit-transform: ${(props) =>
    props.isArrowRotated ? "rotate(90deg)" : "rotate(0deg)"};
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
`;

export default Isaca;
