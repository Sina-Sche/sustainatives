import styled from "styled-components/macro";
import PropTypes from "prop-types";
import icons from "./CategoryIcons";
import InfoContainer from "./ProductInfoContainer";

const ProductText = ({
  display_title,
  price,
  description,
  company_name,
  categories,
  preview,
}) => {
  const productCategories = categories.map((category) => icons[category]);
  const productCategoryIcons = Object.entries(
    productCategories
  ).map(([categoryName, { icon: Icon }]) => <Icon key={categoryName} />);
  return (
    <InfoContainer>
      <h6>{company_name}</h6>
      <h3>{display_title}</h3>
      <p>{description}</p>
      {preview && <div>{productCategoryIcons}</div>}
      <h5>from {price}</h5>
    </InfoContainer>
  );
};

export default ProductText;

ProductText.propTypes = {
  display_title: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  company_name: PropTypes.string,
  categories: PropTypes.array,
  preview: PropTypes.bool,
};
