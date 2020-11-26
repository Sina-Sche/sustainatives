import styled from "styled-components/macro";
// import PropTypes from "prop-types";
import BambookImg from "../assets/images/bambook.jpg";

const Container = styled.div`
  background-image: linear-gradient(120deg, #4d868c, #027368);
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  border-radius: 20%;
  padding: 20px;
  height: 80%;
  width: 80%;
`;

export const Card = () => {
  return (
    <Container>
      <Img src={BambookImg} alt="Bambook" />
    </Container>
  );
};
