import styled from "styled-components/macro";
import PropTypes from "prop-types";
import HairbrushImg from "../assets/images/hairbrush.jpg";
import { TextContainerSmall } from "./TextContainer";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  padding: 10px;
  border-radius: 20%;
  height: auto;
`;
const ProductCard = ({ title }) => {
  return (
    <Container>
      <Img src={HairbrushImg} alt="Hairbrush" />
      <TextContainerSmall title={title} />
    </Container>
  );
};
export default ProductCard;

ProductCard.propTypes = {
  title: PropTypes.string,
};
