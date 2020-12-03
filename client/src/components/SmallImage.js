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
  margin: 5px;
  padding: 15px;
  border: 1px solid var(--icon-active-color);
  border-radius: 20px;
`;

const SmallImage = ({ src, alt, onClick, isFavorite }) => {
  return (
    <Container>
      <Img src={src} alt={alt} />
      <FavoriteIcon onClick={onClick} size={"small"} isFavorite={isFavorite} />
    </Container>
  );
};

export default SmallImage;

SmallImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
  isFavorite: PropTypes.bool,
};
