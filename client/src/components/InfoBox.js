import ProductText from "./ProductText";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import Image from "../components/Image";
import useFavorites from "../hooks/useFavorites";
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
const InfoBox = ({ src, alt, id, title, price, description, size }) => {
  const { toggleFavorite, favorites } = useFavorites("favorites", []);

  return (
    <InfoContainer>
      <Image
        src={src}
        alt={alt}
        size={size}
        id={id}
        onClick={() => toggleFavorite(id)}
        isFavorite={favorites.includes(id)}
      />
      <Link to={`/details/${id}`}>
        <ProductText title={title} price={price} description={description} />
      </Link>
    </InfoContainer>
  );
};

export default InfoBox;

InfoBox.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  size: PropTypes.string,
  id: PropTypes.number,
};
