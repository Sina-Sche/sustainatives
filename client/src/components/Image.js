import styled from "styled-components/macro";
import PropTypes from "prop-types";
import FavoriteIcon from "./FavoriteIcon";
import { Link } from "react-router-dom";

const ImgContainer = styled.div`
  display: flex;
  max-width: 93%;
  align-self: center;
  border-radius: 20%;
  position: relative;
  text-align: center;
  img {
    border-radius: 15%;
    width: 100%;
  }
`;

const ImageIcon = ({ src, alt, size }) => {
  return (
    <ImgContainer>
      <Link to={"/details"}>
        <img src={src} alt={alt} />
      </Link>
      <FavoriteIcon size={size} />
    </ImgContainer>
  );
};

export default ImageIcon;

ImageIcon.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(["small", "large"]),
};
