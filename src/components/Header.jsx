/* eslint-disable no-unused-vars */
import styled from 'styled-components'

export const Header = styled.div`
       color:white;
       background-color: black;
       display: flex;
       padding: 20px;
       flex-direction:row;
       align-items:center;
       justify-content:space-between;
       font-size: 25px;
       font-weight: bold;
       box-shadow: 0 3px 6px 0 #555;
`;

export const AppNameComponent = styled.div`
       display: flex;
       align-item: center;
`;

export const AppIcon = styled.img`
      width : 36px;
      height:36px;
      margin:15px;

`;

export const SearchComponent = styled.div`
       display:flex;
       flex-direction: row;
       background-color: white;
       padding:10px;
       border-radius:6px;
       width:50%;
`;

export const SearchIcon = styled.img`
       width:32px;
       height:32px;
 `;

export const SearchInput = styled.input`
        border: none;
        margin-left: 15px;
        font-size:15px;
        font-weight:bold;
        outline: none;
        background-color: #fff;
        color:black;
`;
