import styled from "styled-components/macro";
import { ReactComponent as Bamboo } from "../assets/icons/bamboo.svg";
import { ReactComponent as Travel } from "../assets/icons/travel.svg";
import { ReactComponent as Bath } from "../assets/icons/bathroom.svg";
import { ReactComponent as Gift } from "../assets/icons/gift.svg";
import { ReactComponent as Household } from "../assets/icons/household.svg";
import { ReactComponent as Ocean } from "../assets/icons/ocean.svg";
import { ReactComponent as Reuse } from "../assets/icons/reuse.svg";
import { ReactComponent as Tree } from "../assets/icons/tree.svg";

const ListContainer = styled.ul`
  list-style: none;
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const createCategoryIcon = (Icon) => styled(Icon)`
  width: 50px;
  height: 50px;
  fill: ${(props) =>
    props.active ? "var(--icon-active-color)" : "var(--icon-inactive-color)"};
`;

const icons = {
  Bamboo: createCategoryIcon(Bamboo),
  Travel: createCategoryIcon(Travel),
  Bath: createCategoryIcon(Bath),
  Gift: createCategoryIcon(Gift),
  Household: createCategoryIcon(Household),
  Ocean: createCategoryIcon(Ocean),
  Reuse: createCategoryIcon(Reuse),
  Tree: createCategoryIcon(Tree),
};
export default function CategoryList() {
  const activeCategories = ["Travel"];
  const CategoryList = Object.entries(icons).map(([categoryName, Icon]) => (
    <li key={categoryName}>
      <Icon active={activeCategories.includes(categoryName)} />
      <p>{categoryName}</p>
    </li>
  ));
  return <ListContainer>{CategoryList}</ListContainer>;
}
