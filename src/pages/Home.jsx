// src/components/App.js
import React from "react";
import styled from "styled-components";

import SearchBar from "../components/SearchBar";

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 30px 30px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
  
`;

const Headline = styled.div`
  font-size: 34px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 600px) {
    font-size: 22px;
  }
  display: flex;
  align-items: center;
  flex-direction: column;

`;
const Span = styled.span`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.secondary};
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  max-width: 1400px;
  padding: 32px 0px;
  justify-content: center;

`;

const CardWrapper = styled.div`
  display: grid;
  gap: 20px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
    @media (max-width: 640px) and (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }
     @media (max-width: 639px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Home = () => {
  return (<><Container>
    <Headline>Explore Popular posts in the Community!
      <Span>⦾ Generated wih AI ⦾</Span>
       </Headline>
       <SearchBar/>
       <Wrapper>
          <CardWrapper>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
          </CardWrapper>
       </Wrapper>
  </Container>
  
  </>)
}

export default Home;
