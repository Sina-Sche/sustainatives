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
  background-image: var(--gradient);

  > :last-child {
    margin-bottom: 15px;
  }
  img {
    height: auto;
    width: 100%;
  }
  h2 {
    color: var(--primary-color);
  }
`;

const ProductPreview = ({ title, src, alt, size }) => {
  return (
    <Container>
      <h2>Our Pick of the Day</h2>
      <Image src={src} alt={alt} size={size} />
      <TextContainer title={title} />
    </Container>
  );
};

export default ProductPreview;

ProductPreview.propTypes = {
  title: PropTypes.string,
  primary: PropTypes.bool,
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(["small", "large"]),
};
