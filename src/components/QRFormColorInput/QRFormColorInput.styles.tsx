import styled from "@emotion/styled";

export const StyledColorInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  ::-webkit-color-swatch {
    border-radius: 50%;
    box-shadow: 0 0 10px #757575;
    border: none;
  }

  ::-moz-color-swatch {
    border-radius: 50%;
    box-shadow: 0 0 10px #757575;
    border: none;
  }
`;
