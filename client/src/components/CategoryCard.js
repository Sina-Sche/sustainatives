import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { ReactComponent as Bamboo } from "../assets/icons/bamboo.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  height: auto;
  justify-content: center;
  align-items: center;
`;
const BambooIcon = styled(Bamboo)`
  height: 60px;
  fill: ${(props) =>
    props.active ? "var(--icon-active-color)" : "var(--icon-inactive-color)"};
`;

const Text = styled.h4`
  color: ${(props) =>
    props.active ? "var(--icon-active-color)" : "var(--icon-inactive-color)"};
`;

export const CategoryCard = ({ title, active }) => {
  return (
    <Container>
      <BambooIcon active={active} />
      <Text active={active}>{title}</Text>
    </Container>
  );
};

CategoryCard.propTypes = {
  title: PropTypes.string,
  active: PropTypes.bool,
};
