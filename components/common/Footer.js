import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../Context";

const Footer = () => {
  const theme = useContext(ThemeContext);
  return (
    <StyledFooter background={theme.secondary} color={theme.primary}>
      sidfot
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
`;

export default Footer;
