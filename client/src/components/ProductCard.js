import styled from "styled-components/macro";
import PropTypes from "prop-types";
import HairbrushImg from "../assets/images/hairbrush.jpg";

const Container = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const TextContainerSmall = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  width: 50%;
  height: 20%;
  position: absolute;
  top: 42%;
  left: 25%;
  border: 1px solid var(--secondary-color);
  border-radius: 50px;
`;

const Img = styled.img`
  border-radius: 20%;
  width: 50%;
  height: auto;
`;
export const ProductCard = ({ title }) => {
  return (
    <Container>
      <Img src={HairbrushImg} alt="Hairbrush" />
      <TextContainerSmall>
        <h3>{title}</h3>
      </TextContainerSmall>
    </Container>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string,
};
