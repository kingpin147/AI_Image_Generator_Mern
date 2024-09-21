import React from 'react'
import styled from 'styled-components';
import { SearchOutlined } from '@mui/icons-material';
import { Input } from '/TextInput';


const SearchBarContainer = styled.div`
    max-width: 550px;
    width: 90%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    background: ${({ theme }) => theme.bg_secondary };
    border-radius: 1px solid ${({ theme }) => theme.bg_secondary + 90};
    border-radius: 8px;
    cursor: pointer;
    gap: 6px;
    align-items: center;
    color: ${({ theme }) => theme.text_primary };
    font-size: 16px;
    `;

const SearchBar = () => {
  return <SearchBarContainer>
    <SearchOutlined/>
    <Input 
    style={{
      border: "none",
      outline: "none",
      Width: "100%",
      color: "inherit",
      background: "transparent",
    }}
    type="text" placeholder="Search with prompt or name . . . . " />
  </SearchBarContainer>
}

export default SearchBar