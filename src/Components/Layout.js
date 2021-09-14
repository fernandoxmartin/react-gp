import React from "react";
import { Header } from "./Header";
import styled from "styled-components";

export const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <main>{children}</main>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding-bottom: 5rem;
`;
