import PropTypes from "prop-types";
import MenuIcon from "../assets/icons/menu.svg";
import styled from "styled-components/macro";
import LeafIcon from "../assets/icons/leaf.svg";

const HeaderContainer = styled.header`
  height: 62px;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  box-shadow: 1px 1px 1px #565959;
  justify-content: space-around;
`;
const MenuButton = styled.button`
  background: none;
  border: none;
  img {
    height: 30px;
    padding-right: 20px;
  }
`;

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <MenuButton>
        <img src={MenuIcon} alt="Menu" />
      </MenuButton>
      <h1>{title}</h1>
      <img src={LeafIcon} alt="Leaf" />
    </HeaderContainer>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
