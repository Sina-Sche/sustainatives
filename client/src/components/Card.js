import styled from "styled-components/macro";
import PropTypes from "prop-types";
import BambookImg from "../assets/images/bambook.jpg";
import CoffeeImg from "../assets/images/coffeecapsules.jpg";
import FavIcon from "../assets/icons/favorite.svg";
import { TextContainer } from "../components/TextContainer";

const Container = styled.div`
  width: 100%;
  background-image: linear-gradient(120deg, #4d868c, #027368);
  display: flex;
  flex-direction: column;
  justify-content: center;
  > :last-child {
    justify-content: center;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  width: 93%;
  align-self: center;
  padding-bottom: 20px;
  border-radius: 20%;
  position: relative;
  text-align: center;
`;

const Img = styled.img`
  border-radius: 15%;
  width: 100%;
`;

const Icon = styled.img`
  height: 50px;
  width: 60px;
  position: absolute;
  right: 5%;
  top: 5%;
`;

export const Card = ({ title, primary }) => {
  let image = primary ? BambookImg : CoffeeImg;
  return (
    <Container>
      <h2>Our Pick of the Day</h2>
      <ImgContainer>
        <Img src={image} alt="Bambook" />
        <Icon src={FavIcon} alt="Favorites" />
        <TextContainer title={title} />
      </ImgContainer>
    </Container>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  primary: PropTypes.bool,
};

Card.defaultProps = {
  primary: true,
};
