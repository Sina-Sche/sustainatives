import styled from "styled-components/macro";
import PropTypes from "prop-types";
import icons from "./CategoryIcons";

const Card = styled.div`
  background-image: var(--gradient);
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h6 {
    color: var(--primary-color);
  }
  span {
    color: var(--primary-color);
    font-size: 0.9rem;
    margin: 15px;
  }
`;
const CategoryCard = ({ activeCategories }) => {
  const currentCategory = icons[activeCategories];
  return (
    <Card>
      <h6>{currentCategory?.label}</h6>
      <img
        src={currentCategory?.img}
        alt={currentCategory?.alt}
        height="150px"
        width="150px"
      />
      <span>{currentCategory?.description}</span>
    </Card>
  );
};

export default CategoryCard;

CategoryCard.propTypes = {
  activeCategories: PropTypes.array,
};
