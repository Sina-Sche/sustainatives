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
`;
const Img = styled.img`
  height: 30px;
  padding-right: 20px;
`;

export const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <MenuButton>
        <Img src={MenuIcon} alt="Menu" />
      </MenuButton>
      <h1>{title}</h1>
      <Img src={LeafIcon} alt="Leaf" />
    </HeaderContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
