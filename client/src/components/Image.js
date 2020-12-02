import styled from "styled-components/macro";
import { ReactComponent as FavIcon } from "../assets/icons/favorite.svg";
import { ReactComponent as FavIconCheck } from "../assets/icons/favorite-added.svg";
import BambookImg from "../assets/images/bambook.jpg";
import PropTypes from "prop-types";

const ImgContainer = styled.div`
  display: flex;
  width: 93%;
  align-self: center;
  border-radius: 20%;
  position: relative;
  text-align: center;
  img {
    border-radius: 15%;
    width: 100%;
  }
  button {
    border: none;
    background: none;
    height: 50px;
    width: 60px;
    position: absolute;
    right: 5%;
    top: 5%;
  }
`;

const ImageIcon = ({ onClick, isFavorite }) => {
  return (
    <ImgContainer>
      <img src={BambookImg} alt="Bambook" />
      <button onClick={onClick}>
        {isFavorite ? <FavIconCheck /> : <FavIcon />}
      </button>
    </ImgContainer>
  );
};

export default ImageIcon;

ImageIcon.propTypes = {
  onClick: PropTypes.func,
  isFavorite: PropTypes.bool,
};
