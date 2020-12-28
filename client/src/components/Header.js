import PropTypes from "prop-types";
import MenuIcon from "../assets/icons/menu.svg";
import styled from "styled-components/macro";
import { ReactComponent as Leaf } from "../assets/icons/leaf.svg";
import { useState } from "react";
import SidebarPage from "../pages/SidebarPage";
import { Link } from "react-router-dom";

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
  svg {
    height: 40px;
    fill: var(--secondary-color);
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
        <Link to={"/about"}>
          <Leaf />
        </Link>
      </HeaderContainer>
      <SidebarPage onClick={toggleSidebar} sidebar={sidebar} />
    </>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
