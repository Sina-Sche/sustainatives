import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import { Link } from "react-router-dom";
import { ReactComponent as Filter } from "../assets/icons/filter.svg";

const Button = styled.button`
  border: 1px solid var(--secondary-color);
  border-radius: 50px;
  background: var(--secondary-color);
  width: 60%;
  display: flex;
  padding: 10px;
  margin: 20px auto auto auto;
  line-height: 1;
  justify-content: center;
  h3 {
    font-size: 1rem;
    color: var(--primary-color);
  }
  svg {
    height: 25px;
    fill: var(--primary-color);
  }
  a {
    display: flex;
  }
`;

export const SearchButton = ({ title, onClick }) => {
  return (
    <Button onClick={onClick}>
      <Link to={"/search"}>
        <Search />
        <h3>{title}</h3>
      </Link>
    </Button>
  );
};

export const FilterButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <Filter />
      <h3>Filter by categories</h3>
    </Button>
  );
};

SearchButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  Icon: PropTypes.string,
  search: PropTypes.bool,
};

FilterButton.propTypes = {
  onClick: PropTypes.func,
};
