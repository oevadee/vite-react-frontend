import React, { ReactNode } from "react";
import styled from "styled-components";

const SWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 1rem;
`;

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return <SWrapper>{children}</SWrapper>;
};
