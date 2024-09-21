import React from 'react'
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "../utils/theme";

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  
`;
const Wrapper = styled.div``;

const CreatePost = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Wrapper>Hello</Wrapper>
      </Container>
    </ThemeProvider>
  )
}

export default CreatePost