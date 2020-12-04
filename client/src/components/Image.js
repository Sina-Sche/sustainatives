import styled from "styled-components/macro";
import PropTypes from "prop-types";
import FavoriteIcon from "./FavoriteIcon";
import { Link } from "react-router-dom";

const ImgContainer = styled.div`
  max-width: 93%;
  align-self: center;
  border-radius: 20px;
  position: relative;
  margin-bottom: 5px;
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
const Image = ({ src, alt, size }) => {
  return (
    <ImgContainer>
      <Link to={"/details"}>
        {size === "small" ? (
          <Img src={src} alt={alt} />
        ) : (
          <img src={src} alt={alt} />
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
};
