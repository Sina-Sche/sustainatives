import ProductText from "./ProductText";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import Image from "../components/Image";
import { Link } from "react-router-dom";

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 95%;
  margin: auto;
  box-shadow: 0px 2px 2px -2px var(--icon-inactive-color);
  img {
    height: 130px;
    width: 130px;
  }
  @media only screen and (min-width: 945px) {
    padding: 0 10% 0 20%;
  }
`;
const InfoBox = (product, { onClick, isFavorite }) => {
  return (
    <InfoContainer>
      <Image
        size={"small"}
        onClick={onClick}
        isFavorite={isFavorite}
        {...product}
      />
      <Link to={`/products/${product.id}`}>
        <ProductText {...product} preview={true} />
      </Link>
    </InfoContainer>
  );
};

export default InfoBox;

InfoBox.propTypes = {
  toggleFavorite: PropTypes.func,
  favorites: PropTypes.array,
};
