import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components/macro";
import { ReactComponent as FavIconCheck } from "../assets/icons/favorite-added.svg";
import { ReactComponent as FavIcon } from "../assets/icons/favorite.svg";

const Button = styled.button`
  height: ${(props) => (props.size === "small" ? "25px" : "50px")};
  width: ${(props) => (props.size === "small" ? "25px" : "50px")};
  position: absolute;
  right: ${(props) => (props.size === "small" ? "12%" : "5%")};
  top: ${(props) => (props.size === "small" ? "12%" : "5%")};
`;
const FavoriteIcon = ({ size }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <Button onClick={handleClick} size={size}>
      {isFavorite ? <FavIconCheck /> : <FavIcon />}
    </Button>
  );
};

export default FavoriteIcon;

FavoriteIcon.propTypes = {
  onClick: PropTypes.func,
  isFavorite: PropTypes.bool,
  size: PropTypes.oneOf(["small", "large"]),
};
