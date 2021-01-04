import styled from "styled-components/macro";
import PropTypes from "prop-types";
import icons from "./CategoryIcons";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
  width: 95%;
  overflow: auto;
  h3 {
    align-self: flex-start;
    margin: 0;
    padding: 0;
  }
  h6 {
    text-align: left;
    margin: 0px;
    align-self: flex-start;
    padding: 20px 0px 0px;
  }
  h5 {
    margin-right: 15px;
    padding-top: 5px;
    justify-self: flex-end;
    align-self: flex-end;
  }
  p {
    color: var(--info-text-color);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  div {
    display: flex;
    justify-content: center;
  }
  :first-child {
    text-align: left;
  }
  svg {
    height: 20px;
    width: 20px;
    fill: var(--secondary-color);
    margin: 5px 15px 0px 0px;
    padding: 0px;
  }
`;

const ProductText = ({
  display_title,
  price,
  description,
  company_name,
  categories,
  preview,
}) => {
  const productCategories = categories?.map((category) => icons[category]);
  const productCategoryIcons = Object.entries(
    productCategories
  ).map(([categoryName, { icon: Icon }]) => <Icon key={categoryName} />);
  return (
    <InfoContainer>
      <h6>{company_name}</h6>
      <h3>{display_title}</h3>
      <p>{description}</p>
      {preview && <div>{productCategoryIcons}</div>}
      <h5>{price}</h5>
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
