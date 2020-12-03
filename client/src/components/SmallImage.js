import styled from "styled-components";
import PropTypes from "prop-types";
import FavoriteIcon from "./FavoriteIcon";

const Container = styled.div`
  display: inline-block;
  position: relative;
`;
const Img = styled.img`
  height: 125px;
  width: 125px;
`;

const SmallImage = ({ imgSrc, alt, onClick, isFavorite }) => {
  return (
    <Container>
      <Img src={imgSrc} alt={alt} />
      <FavoriteIcon onClick={onClick} size={"small"} isFavorite={isFavorite} />
    </Container>
  );
};

export default SmallImage;

SmallImage.propTypes = {
  imgSrc: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
  isFavorite: PropTypes.bool,
};
