import styled from "styled-components/macro";
import PropTypes from "prop-types";
import FavoriteIcon from "./FavoriteIcon";
import { Link } from "react-router-dom";

const ImgContainer = styled.div`
  max-width: 93%;
  align-self: center;
  border-radius: 20px;
  margin: auto;
  position: relative;
  justify-self: center;
  img {
    border-radius: 15%;
    width: 100%;
  }
`;
const SmallImg = styled.img`
  position: relative;
  padding: 10px;
  border: 1px solid var(--icon-active-color);
  max-width: 500px;
  object-fit: contain;
`;
const Image = ({ image, title, id, size, onClick, isFavorite }) => {
  return (
    <ImgContainer>
      <Link to={`/products/${id}`}>
        {size === "small" ? (
          <SmallImg src={image} alt={title} id={id} />
        ) : (
          <img src={image} alt={title} id={id} />
        )}
      </Link>
      <FavoriteIcon onClick={onClick} isFavorite={isFavorite} />
    </ImgContainer>
  );
};
export default Image;

Image.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.oneOf(["small", "large"]),
  id: PropTypes.number,
  _id: PropTypes.number,
  onClick: PropTypes.func,
  isFavorite: PropTypes.bool,
};
