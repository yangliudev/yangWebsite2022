import React from "react";
import styled from "styled-components";

import { Image } from "react-bootstrap";

import profile from "../images/profile.jpg";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import stackOverflow from "../images/stack-overflow.png";

const Profile = () => {
  return (
    <TitleDiv>
      <Image
        src={profile}
        style={{ width: "200px", borderRadius: "25px" }}
        alt="yang_profile_pic"
        fluid
      ></Image>
      <div>
        <Header>Hi, my name is Yang Liu</Header>
        <SubHeader>I am a Software Developer</SubHeader>
        <div>
          <SocialsImg
            src={linkedin}
            alt="linkedin_pic"
            onClick={() =>
              window.open("https://www.linkedin.com/in/yangliu0/", "_blank")
            }
          />
          <SocialsImg
            src={github}
            alt="github_pic"
            onClick={() =>
              window.open("https://github.com/yangliudev", "_blank")
            }
          />
          <SocialsImg
            src={stackOverflow}
            alt="stackOverflow_pic"
            onClick={() =>
              window.open(
                "https://stackoverflow.com/users/15482494/yangcodes",
                "_blank"
              )
            }
          />
        </div>
      </div>
    </TitleDiv>
  );
};

const TitleDiv = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Header = styled.p`
  font-size: 2em;
`;

const SocialsImg = styled(Image)`
  width: 22px;
  margin: 0px 10px;

  :hover {
    cursor: pointer;
  }
`;

const SubHeader = styled.p`
  font-size: 1.2em;
`;

export default Profile;
