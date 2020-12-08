import styled from "styled-components/macro";
import icons from "../components/CategoryIcons";

const ListContainer = styled.ul`
  list-style: none;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default function CategoryList() {
  const activeCategories = [""];
  const CategoryList = Object.entries(icons).map(
    ([categoryName, { icon: Icon, label }]) => (
      <li key={categoryName}>
        <Icon active={activeCategories.includes(categoryName)} />
        <p>{label}</p>
      </li>
    )
  );
  return <ListContainer>{CategoryList}</ListContainer>;
}
