import styled from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as FavIcon } from "../assets/icons/favorite.svg";
import { ReactComponent as FavIconCheck } from "../assets/icons/favorite-added.svg";
import { useState } from "react";

const Container = styled.div`
  display: inline-block;
  position: relative;
`;
const Img = styled.img`
  height: 125px;
  width: 125px;
`;
const Icon = styled.button`
  border: none;
  position: absolute;
  background: none;
  height: 25px;
  width: 25px;
  right: 5%;
  top: 5%;
`;

const SmallImage = ({ imgSrc, alt }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <Container>
      <Img src={imgSrc} alt={alt} />
      <Icon onClick={handleClick}>
        {isFavorite ? <FavIconCheck /> : <FavIcon />}
      </Icon>
    </Container>
  );
};

export default SmallImage;

SmallImage.propTypes = {
  imgSrc: PropTypes.string,
  alt: PropTypes.string,
};
