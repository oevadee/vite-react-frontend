import React, { ReactNode } from "react";
import styled from "styled-components";

const SButton = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.darkSienna};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  border: none;
  border-radius: 1rem;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkSiennaHover};
  }
`;

interface Props {
  children: ReactNode;
}

export const StyledButton = ({ children }: Props) => {
  return <SButton>{children}</SButton>;
};
