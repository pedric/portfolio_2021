import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../../Context";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import ThemeToggler from "../ThemeToggler";

const Nav = () => {
  const theme = useContext(ThemeContext);
  const router = useRouter();
  const [isProjectPage, setIsProjectPage] = useState(false);
  useEffect(() => {
    const match = window.location.href
      ? window.location.href.match(/projekt/i) // to find patterns like projekt/slug
      : 0;
    match && match.length > 0
      ? setIsProjectPage(true)
      : setIsProjectPage(false);
  }, []);

  return (
    <StyledNav accent={theme.accent}>
      <ul>
        <li className={router.asPath == "/" ? "active" : ""}>
          <Link href='/'>
            <a>Start</a>
          </Link>
        </li>
        <li
          className={
            router.asPath == "/projekt" || isProjectPage ? "active" : ""
          }
        >
          <Link href='/projekt'>
            <a>Projekt</a>
          </Link>
        </li>
        <li className={router.asPath == "/om" ? "active" : ""}>
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

  @media (max-width: 500px) {
    width: 100%;
  }

  ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-column-gap: 8px;
  }

  li.active > a:before {
    color: ${(props) => props.accent};
  }

  a {
    display: block;
    text-align: center;
    font-size: 16px;

    &:before {
      content: "•";
      color: transparent;
    }

    // &:hover {
    //   text-decoration: underline;
    // }
  }
`;

export default Nav;
