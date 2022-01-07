import * as React from "react";

import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const IndexPage = () => {
  return (
    <div>
      <title>Yang Liu</title>
      <TitleDiv>
        <Header>Hi, my name is Yang Liu</Header>
        <SubHeader>I am a Software Developer</SubHeader>
      </TitleDiv>
      <PersonalProjectsDiv>
        <Text>Work Experience</Text>
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
      </PersonalProjectsDiv>
      <div>
        <Text>Personal Projects</Text>
        <Row>
          <Col sm={12} md={6}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              feugiat sem erat. Vestibulum ultricies felis eleifend pretium
              mollis. Nunc facilisis, tortor eu euismod lacinia, lorem erat
              porta velit, et sagittis justo turpis vitae turpis. Nulla sapien
              mi, dictum vel quam ac, posuere consectetur nunc. Ut quam nisi,
              imperdiet ut risus at, dictum iaculis nisl. Aenean urna lacus,
              condimentum posuere aliquam sed, elementum vitae eros. Nulla nec
              ipsum convallis, pulvinar leo maximus, condimentum ante.
            </Text>
          </Col>
          <Col sm={12} md={6}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              feugiat sem erat. Vestibulum ultricies felis eleifend pretium
              mollis. Nunc facilisis, tortor eu euismod lacinia, lorem erat
              porta velit, et sagittis justo turpis vitae turpis. Nulla sapien
              mi, dictum vel quam ac, posuere consectetur nunc. Ut quam nisi,
              imperdiet ut risus at, dictum iaculis nisl. Aenean urna lacus,
              condimentum posuere aliquam sed, elementum vitae eros. Nulla nec
              ipsum convallis, pulvinar leo maximus, condimentum ante.
            </Text>
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

export default IndexPage;
