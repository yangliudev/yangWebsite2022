import * as React from "react";

import styled from "styled-components";

const IndexPage = () => {
  return (
    <main>
      <title>Yang Liu</title>
      <div>
        <Container>
          <Text>Yang Liu</Text>
          <Text>Software Developer</Text>
        </Container>
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
