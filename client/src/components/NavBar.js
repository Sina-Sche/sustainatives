import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Home } from "../assets/icons/home.svg";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import { ReactComponent as Add } from "../assets/icons/plus.svg";
import { ReactComponent as Heart } from "../assets/icons/heart.svg";
import styled, { css } from "styled-components/macro";

const Footer = styled.nav`
  height: 62px;
  width: 100%;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  z-index: 1;
  border-top: 1px solid var(--icon-active-color);
`;
const Icon = css`
  height: 40px;
  width: 40px;
  margin: 5px;
  fill: ${(props) =>
    props.$active ? `var(--icon-active-color)` : `var(--icon-inactive-color)`};
`;

const HomeIcon = styled(Home)`
  ${Icon}
`;
const SearchIcon = styled(Search)`
  ${Icon}
`;
const AddIcon = styled(Add)`
  ${Icon}
`;
const HeartIcon = styled(Heart)`
  ${Icon}
`;

const NavBar = () => {
  const location = useLocation();

  return (
    <Footer>
      <Link to={"/"}>
        <HomeIcon $active={location.pathname === "/"} />
      </Link>
      <Link to={"/search"}>
        <SearchIcon $active={location.pathname === "/search"} />
      </Link>
      <Link to={"/add"}>
        <AddIcon $active={location.pathname === "/add"} />
      </Link>
      <Link to={"/favorites"}>
        <HeartIcon $active={location.pathname === "/favorites"} />
      </Link>
    </Footer>
  );
};

export default NavBar;
