import styled from "styled-components/macro";
import { ReactComponent as Bamboo } from "../assets/icons/bamboo.svg";
import { ReactComponent as Travel } from "../assets/icons/travel.svg";
import { ReactComponent as Bathroom } from "../assets/icons/bathroom.svg";
import { ReactComponent as Gifts } from "../assets/icons/gift.svg";
import { ReactComponent as House } from "../assets/icons/household.svg";
import { ReactComponent as Ocean } from "../assets/icons/ocean.svg";
import { ReactComponent as Reuse } from "../assets/icons/reuse.svg";
import { ReactComponent as Tree } from "../assets/icons/tree.svg";

const ListContainer = styled.ul`
  list-style: none;
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin: 0px 15px 20px;
  justify-content: center;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
  Bathroom: createCategoryIcon(Bathroom),
  Gifts: createCategoryIcon(Gifts),
  House: createCategoryIcon(House),
  Ocean: createCategoryIcon(Ocean),
  Reuse: createCategoryIcon(Reuse),
  Tree: createCategoryIcon(Tree),
};
export default function CategoryList() {
  const activeCategories = [];
  const CategoryList = Object.entries(icons).map(([categoryName, Icon]) => (
    <li key={categoryName} active={Icon.active ? true : false}>
      <Icon active={activeCategories.includes(categoryName)} />
      <p>{categoryName}</p>
    </li>
  ));
  return <ListContainer>{CategoryList}</ListContainer>;
}
