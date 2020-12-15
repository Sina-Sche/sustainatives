import ProductText from "./ProductText";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import Image from "../components/Image";
import { Link } from "react-router-dom";

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  box-shadow: 0px 2px 2px -2px var(--icon-inactive-color);
  img {
    height: 150px;
    width: 150px;
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
        <ProductText {...product} />
      </Link>
    </InfoContainer>
  );
};

export default InfoBox;

InfoBox.propTypes = {
  toggleFavorite: PropTypes.func,
  favorites: PropTypes.array,
};
