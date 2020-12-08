import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { useState } from "react";
import { ReactComponent as FavIconCheck } from "../assets/icons/favorite-added.svg";
import { ReactComponent as FavIcon } from "../assets/icons/favorite.svg";

const Button = styled.button`
  height: auto;
  width: 15%;
  position: absolute;
  right: 10%;
  top: 10%;
`;
const FavoriteIcon = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <Button onClick={handleClick}>
      {isFavorite ? <FavIconCheck /> : <FavIcon />}
    </Button>
  );
};

export default FavoriteIcon;

FavoriteIcon.propTypes = {
  onClick: PropTypes.func,
  isFavorite: PropTypes.bool,
};
