import styled from "styled-components/macro";
import PropTypes from "prop-types";
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

const BambooIcon = styled(Bamboo)`
  height: 60px;
  width: 60px;
  fill: ${(props) =>
    props.active ? "var(--icon-active-color)" : "var(--icon-inactive-color)"};
`;
const TravelIcon = styled(Travel)`
  height: 60px;
  width: 60px;
  fill: ${(props) =>
    props.active ? "var(--icon-active-color)" : "var(--icon-inactive-color)"};
`;
const BathIcon = styled(Bath)`
  height: 60px;
  width: 60px;
  fill: ${(props) =>
    props.active ? "var(--icon-active-color)" : "var(--icon-inactive-color)"};
`;
const GiftIcon = styled(Gift)`
  height: 60px;
  width: 60px;
  fill: ${(props) =>
    props.active ? "var(--icon-active-color)" : "var(--icon-inactive-color)"};
`;
const OceanIcon = styled(Ocean)`
  height: 60px;
  width: 60px;
  fill: ${(props) =>
    props.active ? "var(--icon-active-color)" : "var(--icon-inactive-color)"};
`;
const HouseholdIcon = styled(Household)`
  height: 60px;
  width: 60px;
  fill: ${(props) =>
    props.active ? "var(--icon-active-color)" : "var(--icon-inactive-color)"};
`;
const TreeIcon = styled(Tree)`
  height: 60px;
  width: 60px;
  fill: ${(props) =>
    props.active ? "var(--icon-active-color)" : "var(--icon-inactive-color)"};
`;
const ReuseIcon = styled(Reuse)`
  height: 60px;
  width: 60px;
  fill: ${(props) =>
    props.active ? "var(--icon-active-color)" : "var(--icon-inactive-color)"};
`;

export const CategoryList = ({ active }) => {
  return (
    <ListContainer>
      <li>
        <BambooIcon active={active} />
        <p>Bamboo</p>
      </li>
      <li>
        <TravelIcon title={"Travel"} active={active} />
        <p>Travel</p>
      </li>
      <li>
        <TreeIcon title={"Tree"} active={active} />
        <p>Plant a Tree</p>
      </li>
      <li>
        <HouseholdIcon title={"Household"} active={active} />
        <p>Household</p>
      </li>
      <li>
        <GiftIcon title={"Gift"} active={active} />
        <p>Gifts</p>
      </li>
      <li>
        <BathIcon title={"Bathroom"} active={active} />
        <p>Bathroom</p>
      </li>
      <li>
        <OceanIcon title={"Ocean"} active={active} />
        <p>Support our Oceans</p>
      </li>
      <li>
        <ReuseIcon title={"Reuse"} active={active} />
        <p>Reduce, Reuse, Recycle</p>
      </li>
    </ListContainer>
  );
};
CategoryList.propTypes = {
  title: PropTypes.string,
  active: PropTypes.bool,
};
