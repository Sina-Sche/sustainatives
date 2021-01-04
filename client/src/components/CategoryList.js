import styled from "styled-components/macro";
import icons from "../components/CategoryIcons";
import PropTypes from "prop-types";

const ListContainer = styled.ul`
  list-style: none;
  display: grid;
  margin: 20px 10px 0px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  svg {
    height: 30px;
  }
`;

export default function CategoryList({ toggleActive, activeCategories }) {
  const CategoryList = Object.entries(icons).map(
    ([categoryName, { icon: Icon, label }]) => (
      <li
        key={categoryName}
        onClick={() => {
          toggleActive(categoryName);
        }}
      >
        <Icon $active={activeCategories.includes(categoryName)} />
        <p>{label}</p>
      </li>
    )
  );
  return <ListContainer>{CategoryList}</ListContainer>;
}

CategoryList.propTypes = {
  toggleActive: PropTypes.func,
  activeCategories: PropTypes.array,
};
