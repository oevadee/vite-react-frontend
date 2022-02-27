import React, { ReactNode } from "react";
import styled from "styled-components";

const SHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
`;

interface Props {
  children: ReactNode;
  className?: string;
}

export const StyledHeader = ({ children, className }: Props) => {
  return <SHeader className={className}>{children}</SHeader>;
};
