import styled from "styled-components/macro";
import PropTypes from "prop-types";
import TextContainer from "./TextContainer";
import Image from "../components/Image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  padding-bottom: 15px;
  background-image: var(--gradient);

  > :last-child {
    margin-bottom: 15px;
  }
  img {
    height: auto;
    width: 100%;
    background: var(--primary-color);
  }
  h2 {
    color: var(--primary-color);
    margin-top: 0;
  }
`;

const ProductPreview = (data, { onClick, isFavorite }) => {
  return (
    <Container>
      <h2>Our Current Favorite</h2>
      <Image onClick={onClick} isFavorite={isFavorite} {...data} />
      <TextContainer {...data} />
    </Container>
  );
};

export default ProductPreview;

ProductPreview.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(["small", "large"]),
  onClick: PropTypes.func,
  isFavorite: PropTypes.bool,
};
