import styled from "styled-components/macro";
import PropTypes from "prop-types";
import BambookImg from "../assets/images/bambook.jpg";
import CoffeeImg from "../assets/images/coffeecapsules.jpg";
import { TextContainer } from "../components/TextContainer";

const Container = styled.div`
  width: 100vw;
  background-image: linear-gradient(120deg, #4d868c, #027368);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImgContainer = styled.div`
  display: flex;
  align-self: center;
  padding-bottom: 20px;
  border-radius: 20%;
  position: relative;
  text-align: center;
`;

const Img = styled.img`
  border-radius: 20%;
  width: 280px;
  align-self: center;
`;

export const Card = ({ title, primary }) => {
  let image = primary ? BambookImg : CoffeeImg;
  return (
    <Container>
      <h2>Our Pick of the Day</h2>
      <ImgContainer>
        <Img src={image} alt="Bambook" />
        <TextContainer title={title} />
      </ImgContainer>
    </Container>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  primary: PropTypes.bool,
};
