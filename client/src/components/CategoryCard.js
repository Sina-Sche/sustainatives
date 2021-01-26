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
  margin: 20px;
  h3 {
    color: var(--primary-color);
  }
  img {
    height: auto;
    border-radius: 10px;
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
    activeCategories.length > 0 && (
      <Card>
        <h3>{currentCategory?.label}</h3>
        <img
          src={currentCategory?.img}
          alt={currentCategory?.alt}
          height="150px"
          width="150px"
        />
        <span>{currentCategory?.description}</span>
      </Card>
    )
  );
};

export default CategoryCard;

CategoryCard.propTypes = {
  activeCategories: PropTypes.array,
};
