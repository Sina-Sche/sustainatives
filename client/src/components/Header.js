import PropTypes from "prop-types";
import MenuIcon from "../assets/icons/menu.svg";
import styled from "styled-components/macro";

const HeaderContainer = styled.header`
  height: 62px;
  width: 100vw;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  box-shadow: 1px 1px 1px #565959;
`;
const MenuButton = styled.button`
  justify-self: flex-start;
  background: none;
  border: none;
  padding-left: 20px;
`;
const Img = styled.img`
  height: 30px;
  padding-right: 20px;
`;
const Heading = styled.h1`
  padding-left: 50px;
`;

export const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <MenuButton>
        <Img src={MenuIcon} alt="Menu" />
      </MenuButton>
      <Heading>{title}</Heading>
    </HeaderContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
