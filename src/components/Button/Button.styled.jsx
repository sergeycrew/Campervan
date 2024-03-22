import styled from "styled-components";

export const CustomButton = styled.button`
  width: 173px;
  height: 56px;
  padding: 16px 60px;
  align-items: center;
  border-radius: 1.5rem;
  border-radius: 200px;
  box-sizing: border-box;
  gap: 10px;
  justify-content: center;
  background-color: ${(p) => p.theme.colors.redColor};
  &:hover {
    background-color: ${(p) => p.theme.colors.hoverButtonColor};
  }
`;

export const Text = styled.p`
  color: ${(p) => p.theme.colors.whiteColor};
`;
