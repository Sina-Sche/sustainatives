import React from "react";
import HomeIcon from "../assets/icons/home-inactive.svg";
import SearchIcon from "../assets/icons/search-inactive.svg";
import AddIcon from "../assets/icons/plus-inactive.svg";
import HeartIcon from "../assets/icons/heart-inactive.svg";

import styled from "styled-components/macro";

const Footer = styled.footer`
  height: 62px;
  background: var(--primary-color);
  display: flex;
  justify-content: space-around;
`;

const IconButton = styled.button`
  background: none;
  color: var(--icon-inactive-color);
  border: none;
`;
const Img = styled.img`
  color: red;
  height: 30px;
`;

export const NavBar = () => {
  return (
    <Footer>
      <IconButton>
        <Img src={HomeIcon} alt="Home" />
      </IconButton>
      <IconButton>
        <Img src={SearchIcon} alt="Search" />
      </IconButton>
      <IconButton>
        <Img src={AddIcon} alt="Search" />
      </IconButton>
      <IconButton>
        <Img src={HeartIcon} alt="Search" />
      </IconButton>
    </Footer>
  );
};
