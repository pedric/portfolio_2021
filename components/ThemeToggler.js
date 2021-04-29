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
  };

  return (
    <Toggler state={value} theme={theme}>
      <span className='sun'>🌞</span>
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
      <span className='moon'>🌛</span>
    </Toggler>
  );
};

const Toggler = styled.div`
  position: relative;

  span {
    position: absolute;
    top: -4px;
    &.sun {
      left: 2px;
    }
    &.moon {
      right: 19px;
    }
  }

  label {
    position: relative;
    width: 40px;
    height: 20px;
    background: #88888859;
    display: inline-block;
    margin: 0;
    border-radius: 10px;
    z-index: 1;
    &:hover {
      cursor: pointer;
    }

    .ball {
      position: absolute;
      top: 1px;
      left: ${(props) => (props.state ? "20px" : "1px")};
      width: 18px;
      height: 18px;
      border-radius: 9px;
      background: ${(props) => props.theme.primary};
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
