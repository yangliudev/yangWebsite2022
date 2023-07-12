import React from "react";
import styled from "styled-components";

import PhoneBox from "./PhoneBox";
import TedxAbbotsford from "./TedxAbbotsford";
import Isaca from "./Isaca";

const WorkExperience = () => {
  return (
    <WorkExperienceDiv>
      <Topic>Work Experience</Topic>
      <br />
      <PhoneBox />
      <br />
      <TedxAbbotsford />
      <br />
      <Isaca />
    </WorkExperienceDiv>
  );
};

const WorkExperienceDiv = styled.div`
  margin-top: 40px;
`;

const Topic = styled.p`
  font-size: 1.75em;
  text-decoration: underline;
`;

export default WorkExperience;
