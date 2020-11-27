import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.9);
  width: 220px;
  height: 40px;
  position: absolute;
  bottom: 10%;
  left: 10%;
  border: 2px solid var(--secondary-color);
`;

export const TextContainer = ({ title }) => {
  return (
    <Container>
      <h3>{title}</h3>
    </Container>
  );
};

TextContainer.propTypes = {
  title: PropTypes.string,
};
