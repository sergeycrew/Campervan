import styled from "styled-components";

export const Button = styled.button`
  width: 166px;
  height: 56px;
  border-radius: 1.5rem;
  background-color: ${(p) => p.theme.redColor}
  color: ${(p) => p.theme.whiteColor}
`;
