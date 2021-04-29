import React from "react";
import styled from "styled-components";
import Link from "next/link";
import ThemeToggler from "../ThemeToggler";

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link href='/'>
            <a>Start</a>
          </Link>
        </li>
        <li>
          <Link href='/projekt'>
            <a>Projekt</a>
          </Link>
        </li>
        <li>
          <Link href='/om'>
            <a>Om</a>
          </Link>
        </li>
        <li>
          <ThemeToggler />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  max-width: 100%;
  width: 240px;
  z-index: 1;

  ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: auto auto auto auto;
  }

  a {
    display: block;
    text-align: center;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Nav;
