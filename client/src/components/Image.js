import styled from "styled-components/macro";
import PropTypes from "prop-types";
import FavoriteIcon from "./FavoriteIcon";
import { Link } from "react-router-dom";

const ImgContainer = styled.div`
  max-width: 93%;
  align-self: center;
  border-radius: 20px;
  position: relative;
  margin: auto;
  justify-self: center;
  img {
    border-radius: 15%;
    width: 100%;
  }
`;
const Img = styled.img`
  position: relative;
  padding: 10px;
  border: 1px solid var(--icon-active-color);
  border-radius: 20px;
`;
const Image = ({ src, alt, size, id }) => {
  return (
    <ImgContainer>
      <Link to={`/details/${id}`}>
        {size === "small" ? (
          <Img src={src} alt={alt} id={id} />
        ) : (
          <img src={src} alt={alt} id={id} />
        )}
      </Link>
      <FavoriteIcon size={size} />
    </ImgContainer>
  );
};
export default Image;

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(["small", "large"]),
  id: PropTypes.number,
};
