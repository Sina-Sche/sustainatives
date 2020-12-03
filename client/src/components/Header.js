import PropTypes from "prop-types";
import MenuIcon from "../assets/icons/menu.svg";
import styled from "styled-components/macro";
import LeafIcon from "../assets/icons/leaf.svg";

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
  return (
    <>
      <HeaderContainer>
        <button>
          <img src={MenuIcon} alt="Menu" />
        </button>
        <h1>{title}</h1>
        <img src={LeafIcon} alt="Leaf" />
      </HeaderContainer>
    </>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
