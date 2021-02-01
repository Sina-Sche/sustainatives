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
  height: 62px;
  width: 100%;
  z-index: 1;
  background: var(--primary-color);
  border-bottom: 1px solid var(--icon-active-color);
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  line-height: 1;
  align-items: center;
  img {
    height: 40px;
  }
  svg {
    height: 40px;
    fill: var(--secondary-color);
  }
  a {
    margin-right: 10px;
    text-align: right;
  }
  @media only screen and (min-width: 945px) {
    button {
      visibility: hidden;
    }
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
      <SidebarPage
        onClick={toggleSidebar}
        sidebar={sidebar}
        setSidebar={setSidebar}
      />
    </>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
