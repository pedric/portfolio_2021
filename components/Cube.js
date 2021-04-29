import React from "react";
import styled from "styled-components";

const CubeWrapper = styled.div`
  position: absolute;
  width: 33%;
  top: 0%;
  left: 20%;

  & svg {
    fill: #848383;
    opacity: 0.1;
  }
`;

const Cube = () => {
  return (
    <CubeWrapper>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 338.54 353.01'>
        <defs></defs>
        <g>
          <g>
            <polygon points='167.89 183.6 167.89 353.01 158.99 348.48 157.98 347.97 1.64 268.31 158.99 188.13 158.99 188.15 167.89 183.6' />
            <polygon points='167.89 173.2 167.89 180.51 156.92 186.13 156.92 186.11 0 266.06 0 87.65 155.62 166.95 155.62 166.88 167.89 173.2' />
            <polygon points='336.89 85.41 169.27 170.81 158.99 165.53 158.99 165.58 1.64 85.41 154.37 7.58 154.37 7.47 169.27 0 336.89 85.41' />
            <polygon points='170.64 353.01 170.64 183.6 336.89 268.31 170.64 353.01' />
            <polygon points='338.54 266.06 170.64 180.51 170.64 173.2 338.54 87.65 338.54 266.06' />
          </g>
        </g>
      </svg>
    </CubeWrapper>
  );
};

export default Cube;
