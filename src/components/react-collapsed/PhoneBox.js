import React, { useState } from "react";

import { Row, Col, Image, Container } from "react-bootstrap";
import useCollapse from "react-collapsed";
import styled from "styled-components";

import phonebox from "../../images/phonebox.png";
import rightArrow from "../../images/right-arrow.png";

const PhoneBox = () => {
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
                src={phonebox}
                style={{ width: "50px" }}
                alt="phonebox_pic"
                fluid
              ></Image>
            </Col>
            <Col>
              <Text>PhoneBox</Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <ArrowDiv>
            <Duration>March 2021 - Feb 2022</Duration>
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
          Check out the app on the{" "}
          <HyperLink
            onClick={() =>
              window.open(
                "https://apps.apple.com/us/app/phonebox/id1566434192",
                "_blank"
              )
            }
          >
            App Store
          </HyperLink>{" "}
          or{" "}
          <HyperLink
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.phonebox2021",
                "_blank"
              )
            }
          >
            Google Play Store
          </HyperLink>
          !
        </Text>
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
      </section>
    </div>
  );
};

const Text = styled.p`
  font-family: "Montserrat";
`;

const Duration = styled.p`
  font-family: "Montserrat";
  white-space: nowrap;
  overflow: auto;
`;

const ArrowDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HyperLink = styled.span`
  font-family: "Montserrat";
  color: blue;

  :hover {
    cursor: pointer;
  }
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

export default PhoneBox;
