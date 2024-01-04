import React, { useState } from "react";

import { Row, Col, Image, Container } from "react-bootstrap";
import { useCollapse } from "react-collapsed";
import styled from "styled-components";

import ted from "../images/ted.jpg";
import rightArrow from "../images/right-arrow.png";

const TedxAbbotsford = () => {
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
          <Row className="align-items-center">
            <Col>
              <Image
                src={ted}
                style={{ width: "50px", borderRadius: "10px" }}
                alt="ted_pic"
              ></Image>
            </Col>
            <Col>
              <p className="text-center m-0">TedxAbbotsford</p>
            </Col>
          </Row>
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <ArrowDiv>
            <p className="text-center m-0">Sep 2020 - Dec 2020</p>
            <MyImage
              src={rightArrow}
              style={{ width: "16px", marginLeft: "10px" }}
              alt="rightArrow_pic"
              isArrowRotated={isArrowRotated}
            />
          </ArrowDiv>
        </Col>
      </Row>
      <br />

      <section {...getCollapseProps()}>
        <p>
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
        </p>
      </section>
    </div>
  );
};

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

export default TedxAbbotsford;
