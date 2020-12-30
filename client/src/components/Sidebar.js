import { ReactComponent as Home } from "../assets/icons/home.svg";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import { ReactComponent as Plus } from "../assets/icons/plus.svg";
import { ReactComponent as Heart } from "../assets/icons/heart.svg";
import { ReactComponent as Leaf } from "../assets/icons/leaf.svg";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";

const NavIcon = css`
  height: 25px;
  fill: var(--primary-color);
  margin-right: 10px;
`;
const HomeIcon = styled(Home)`
  ${NavIcon}
`;
const SearchIcon = styled(Search)`
  ${NavIcon}
`;
const PlusIcon = styled(Plus)`
  ${NavIcon}
`;
const HeartIcon = styled(Heart)`
  ${NavIcon}
`;
const LeafIcon = styled(Leaf)`
  ${NavIcon}
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 10px 10px;
  border: none;
  a {
    text-decoration: none;
    color: var(--primary-color);
    width: 100%;
    margin: 5px 5px 20px 5px;
    justify-content: center;
    padding-bottom: 5px;
  }
  span {
    margin-top: 5px;
  }
`;
const Sidebar = () => {
  return (
    <SidebarContainer>
      <Link to={"/"}>
        <HomeIcon />
        <span>Home</span>
      </Link>
      <Link to={"/search"}>
        <SearchIcon />
        <span>Search</span>
      </Link>
      <Link to={"/add"}>
        <PlusIcon />
        <span>Add a SustainAtive</span>
      </Link>
      <Link to={"/favorites"}>
        <HeartIcon />
        <span>Favorites</span>
      </Link>
      <Link to={"/about"}>
        <LeafIcon />
        <span>About</span>
      </Link>
    </SidebarContainer>
  );
};
export default Sidebar;
