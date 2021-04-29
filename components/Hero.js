import styled from "styled-components";
import React from "react";
import Cube from "./Cube";

const Hero = ({ tagLine, image }) => {
  const backgroundImage = image ? image : "";
  return (
    <StyledHero image={backgroundImage}>
      <h1 dangerouslySetInnerHTML={{ __html: tagLine }}></h1>
    </StyledHero>
  );
};

const StyledHero = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  overflow: hidden;
  padding: 16px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;

  @media (min-width: 960px) {
    & h1 > span {
      display: block;
    }
  }
`;

export default Hero;
