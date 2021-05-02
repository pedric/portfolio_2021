import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ThemeContext, ThemeChanger } from "../Context";

const ThemeToggler = () => {
  const [value, setValue] = useState(true);
  const theme = useContext(ThemeContext);
  const setTheme = useContext(ThemeChanger);

  const handleChange = () => {
    setValue(!value);
    setTheme(value ? "dark" : "light");
    document.body.style.background = theme.primary;
  };

  return (
    <Toggler state={value} theme={theme}>
      <span className='light'>🌞</span>
      <label htmlFor='mode'>
        <div className='ball'></div>
      </label>
      <input
        id='mode'
        name='mode'
        type='checkbox'
        value={value}
        onChange={handleChange}
      />
      <span className='dark'>🌛</span>
    </Toggler>
  );
};

const Toggler = styled.div`
  position: relative;

  span {
    display: none;
    position: absolute;
    top: -1px;
    font-size: 13px;
    z-index: 1;
    &.light {
      left: 2px;
    }
    &.dark {
      right: 19px;
    }
  }

  label {
    position: relative;
    width: 40px;
    height: 20px;
    background: ${(props) => props.theme.accent};
    display: inline-block;
    margin: 0;
    border-radius: 10px;
    z-index: 0;
    &:hover {
      cursor: pointer;
    }

    .ball {
      position: absolute;
      top: 2px;
      left: ${(props) => (props.state ? "22px" : "2px")};
      width: 16px;
      height: 16px;
      border-radius: 8px;
      background: ${(props) => props.theme.secondary};
      z-index: 2;
    }
  }

  input {
    display: none;
    width: 0px;
    height: 0px;
    opacity: 0;
    margin: 0;
  }
`;

export default ThemeToggler;
