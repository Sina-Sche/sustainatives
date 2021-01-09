import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { ReactComponent as FavIconCheck } from "../assets/icons/favorite-added.svg";
import { ReactComponent as FavIcon } from "../assets/icons/favorite.svg";

const Button = styled.button`
  height: auto;
  width: 22%;
  position: absolute;
  right: 7%;
  top: 7%;
`;
const FavoriteIcon = ({ onClick, isFavorite }) => {
  return (
    <Button onClick={onClick}>
      {isFavorite ? <FavIconCheck /> : <FavIcon />}
    </Button>
  );
};

export default FavoriteIcon;

FavoriteIcon.propTypes = {
  onClick: PropTypes.func,
  isFavorite: PropTypes.bool,
};
