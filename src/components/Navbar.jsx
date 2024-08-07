import React from "react";
import styled, { ThemeProvider } from "styled-components";

const defaultTheme = {
  bg: "#000000",
  text_primary: "#FFFFFF",
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.3s ease;
`;

const Navbar = () => {
  return (
    <Container>Navbar</Container>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Navbar />
    </ThemeProvider>
  );
};

export default App;
