import styled from "styled-components/macro";
import PropTypes from "prop-types";
import TextContainer from "./TextContainer";
import Image from "../components/Image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.primary ? "flex-end" : "center")};
  position: relative;
  width: 100%;
  margin: ${(props) => (props.primary ? "0" : "5px")};
  background-image: ${(props) => (props.primary ? "var(--gradient)" : "red")};

  > :last-child {
    margin-bottom: ${(props) => (props.primary ? "15px" : "0")};
  }
  img {
    height: auto;
    width: ${(props) => (props.primary ? "100%" : "80%")};
  }
  h2 {
    color: var(--primary-color);
  }
`;

const ProductPreview = ({ title, primary, src, alt, size }) => {
  return (
    <Container primary={primary}>
      {primary ? <h2>Our Pick of the Day</h2> : <></>}
      <Image src={src} alt={alt} size={size} />
      {size === "small" ? (
        <></>
      ) : (
        <TextContainer title={title} primary={true} />
      )}
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
