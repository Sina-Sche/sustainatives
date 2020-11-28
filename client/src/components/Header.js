import PropTypes from "prop-types";
import MenuIcon from "../assets/icons/menu.svg";
import styled from "styled-components/macro";
import SearchIcon from "../assets/icons/search.svg";

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
  justify-content: flex-start;
`;
const Img = styled.img`
  height: 30px;
  padding-right: 20px;
`;
const Heading = styled.h1`
  justify-content: center;
`;

export const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <MenuButton>
        <Img src={MenuIcon} alt="Menu" />
      </MenuButton>
      <Heading>{title}</Heading>
      <MenuButton>
        <Img src={SearchIcon} alt="Menu" />
      </MenuButton>
    </HeaderContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
