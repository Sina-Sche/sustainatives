import styled from "styled-components/macro";
import PropTypes from "prop-types";
import BambookImg from "../assets/images/bambook.jpg";
import { ReactComponent as FavIcon } from "../assets/icons/favorite.svg";
import { ReactComponent as FavIconCheck } from "../assets/icons/favorite-added.svg";
import { TextContainer } from "./TextContainer";
import { useState } from "react";

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

const Icon = styled.button`
  border: none;
  background: none;
  height: 50px;
  width: 60px;
  position: absolute;
  right: 5%;
  top: 5%;
`;

export const LargeCard = ({ title }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };
  console.log(isFavorite);
  return (
    <Container>
      <h2>Our Pick of the Day</h2>
      <ImgContainer>
        <Img src={BambookImg} alt="Bambook" />
        <Icon onClick={handleClick}>
          {isFavorite ? <FavIconCheck /> : <FavIcon />}
        </Icon>
        <TextContainer title={title} />
      </ImgContainer>
    </Container>
  );
};

LargeCard.propTypes = {
  title: PropTypes.string,
};
