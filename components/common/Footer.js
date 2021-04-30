import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../Context";

const Footer = () => {
  const theme = useContext(ThemeContext);
  return (
    <StyledFooter background={theme.secondary} color={theme.primary}>
      <a href='https://www.linkedin.com/in/johanfredriklarsson/'>Linkedin</a>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: grid;
  place-items: center;
  padding: 16px;
  border-top: 0.5px solid rgba(150, 150, 150, 0.1);
  background: ${(props) => props.background};
  color: ${(props) => props.color};
`;

export default Footer;
