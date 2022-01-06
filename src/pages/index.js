import * as React from "react";

import styled from "styled-components";

const IndexPage = () => {
  return (
    <main>
      <title>Yang Liu</title>
      <Container>
        <Text>Hi, my name is Yang Liu</Text>
        <Text>I am a Software Developer</Text>
      </Container>
      <div>
        <Text>Work Experience</Text>
      </div>
      <div>
        <Text>Personal Projects</Text>
      </div>
      <div>
        <Text>Education</Text>
      </div>
    </main>
  );
};

// Styled Components

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-family: "Montserrat";
`;

export default IndexPage;
