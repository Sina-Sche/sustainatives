import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Home } from "../assets/icons/home.svg";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import { ReactComponent as Add } from "../assets/icons/plus.svg";
import { ReactComponent as Heart } from "../assets/icons/heart.svg";
import styled from "styled-components/macro";

const Footer = styled.nav`
  height: 62px;
  width: 100%;
  background: var(--primary-color);
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
`;

const HomeIcon = styled(Home)`
  height: 40px;
  width: 40px;
  margin: 5px;
  fill: ${(props) =>
    props.active ? `var(--icon-active-color)` : `var(--icon-inactive-color)`};
`;
const SearchIcon = styled(Search)`
  height: 40px;
  width: 40px;
  margin: 5px;
  fill: ${(props) =>
    props.active ? `var(--icon-active-color)` : `var(--icon-inactive-color)`};
`;
const AddIcon = styled(Add)`
  height: 40px;
  width: 40px;
  margin: 5px;
  fill: ${(props) =>
    props.active ? `var(--icon-active-color)` : `var(--icon-inactive-color)`};
`;
const HeartIcon = styled(Heart)`
  height: 40px;
  width: 40px;
  margin: 5px;
  fill: ${(props) =>
    props.active ? `var(--icon-active-color)` : `var(--icon-inactive-color)`};
`;

const NavBar = () => {
  const location = useLocation();

  return (
    <Footer>
      <Link to={"/"}>
        <HomeIcon active={location.pathname === "/"} />
      </Link>
      <Link to={"/search"}>
        <SearchIcon active={location.pathname === "/search"} />
      </Link>
      <Link to={"/add"}>
        <AddIcon active={location.pathname === "/add"} />
      </Link>
      <Link to={"/favorites"}>
        <HeartIcon active={location.pathname === "/favorites"} />
      </Link>
    </Footer>
  );
};

export default NavBar;
