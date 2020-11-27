import styled from "styled-components/macro";
import PropTypes from "prop-types";
import HairbrushImg from "../assets/images/hairbrush.jpg";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const TextContainerSmall = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  position: absolute;
  top: 40%;
  left: 18%;
  border: 1px solid var(--secondary-color);
  border-radius: 50px;
`;

const Img = styled.img`
  width: 100%;
  padding: 10px;
  border-radius: 20%;
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
