import PropTypes from "prop-types";
import MenuIcon from "../assets/icons/menu.svg";
import styled from "styled-components/macro";
import LeafIcon from "../assets/icons/leaf.svg";
import { useState } from "react";
import SidebarData from "./Sidebar";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import SidebarPage from "../pages/SidebarPage";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  height: 62px;
  width: 100%;
  background: var(--primary-color);
  border-bottom: 1px solid var(--icon-active-color);
  display: flex;
  align-items: center;
  justify-content: space-around;
  img {
    height: 40px;
  }
`;
const Header = ({ title }) => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <HeaderContainer>
        <button onClick={() => toggleSidebar()}>
          <img src={MenuIcon} alt="Menu" />
        </button>
        <h1>{title}</h1>
        <img src={LeafIcon} alt="Leaf" />
      </HeaderContainer>
      <SidebarPage onClick={toggleSidebar} sidebar={sidebar} />
    </>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
