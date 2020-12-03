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
  background-image: ${(props) => (props.primary ? "var(--gradient)" : "none")};
  > :last-child {
    margin-bottom: ${(props) => (props.primary ? "30px" : "0")};
  }
  img {
    height: auto;
    width: 100%;
    border-radius: 50px;
    padding: 10px;
  }
  h2 {
    color: var(--primary-color);
  }
`;

const LargeCard = ({ title, primary, src, alt, size }) => {
  return (
    <Container primary={primary}>
      {primary ? <h2>Our Pick of the Day</h2> : <></>}
      <Image src={src} alt={alt} size={size} />
      <TextContainer title={title} primary={true} />
    </Container>
  );
};

export default LargeCard;

LargeCard.propTypes = {
  title: PropTypes.string,
  primary: PropTypes.bool,
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(["small", "large"]),
};
