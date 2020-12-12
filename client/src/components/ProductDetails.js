import styled from "styled-components/macro";
import Image from "../components/Image";
import PropTypes from "prop-types";
import ProductText from "./ProductText";
import icons from "./CategoryIcons";
import useFavorites from "../hooks/useFavorites";

const DetailsContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  align-items: center;
  div {
    margin-top: 0;
    padding-top: 0;
    min-width: 350px;
  }
  h3 {
    margin-top: 0;
    padding-top: 0;
    text-align: left;
    color: var(--primary-color);
  }
  h5 {
    color: var(--primary-color);
    text-align: left;
  }
  p {
    color: var(--primary-color);
    height: auto;
    display: flex;
    overflow: visible;
  }
  img {
    border: 1px solid var(--icon-active-color);
  }
  h6 {
    color: var(--primary-color);
    text-align: left;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 0;
  }
  a {
    align-self: flex-end;
    width: 40%;
  }
`;

const ProductDetailsContainer = styled.div`
  background-image: var(--gradient);
  display: flex;
  flex-direction: column;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  max-width: 800px;
`;

const Button = styled.button`
  background-color: var(--primary-color);
  border-radius: 50px;
  color: var(--secondary-color);
  font-weight: bold;
  padding: 8px;
  margin: 15px;
  letter-spacing: 1;
  font-size: 0.9rem;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  margin: 10px;
  svg {
    fill: var(--primary-color);
  }
`;

const ProductDetails = (data) => {
  const { favorites, toggleFavorite } = useFavorites("favorites", []);
  const productCategories = data.categories.map((category) => icons[category]);
  const productCategoryIcons = Object.entries(
    productCategories
  ).map(([categoryName, { icon: Icon }]) => <Icon key={categoryName} />);
  return (
    <DetailsContainer>
      <Image
        {...data}
        onClick={() => {
          toggleFavorite(data.id);
        }}
        isFavorite={favorites.includes(data.id)}
      />
      <ProductDetailsContainer>
        <h6>{data.company_name}</h6>
        <ProductText {...data} />
        <IconContainer>{productCategoryIcons}</IconContainer>
        <a href={data.url}>
          <Button>Visit Website</Button>
        </a>
      </ProductDetailsContainer>
    </DetailsContainer>
  );
};

export default ProductDetails;

ProductDetails.propTypes = {
  onClick: PropTypes.func,
  isFavorite: PropTypes.bool,
};
