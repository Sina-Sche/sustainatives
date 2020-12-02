import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { TextContainer } from "./TextContainer";
import Image from "./Image";

const Container = styled.div`
  width: 100%;
  background-image: linear-gradient(120deg, #4d868c, #027368);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 20px;
  > :last-child {
    margin-bottom: 30px;
  }
  h2 {
    color: var(--primary-color);
  }
`;

const LargeCard = ({ onClick, isFavorite, title }) => {
  return (
    <Container>
      <h2>Our Pick of the Day</h2>
      <Image onClick={onClick} isFavorite={isFavorite} title={title} />
      <TextContainer title={"Bambook Notebook"} />
    </Container>
  );
};

export default LargeCard;

LargeCard.propTypes = {
  onClick: PropTypes.func,
  isFavorite: PropTypes.bool,
  title: PropTypes.string,
};
