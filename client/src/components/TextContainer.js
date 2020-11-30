import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  position: absolute;
  align-self: flex-end;
  justify-content: center;
  width: 80%;
  margin: 10px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid var(--secondary-color);
`;
const TextContainer = ({ title }) => {
  return (
    <Container>
      <h3>{title}</h3>
    </Container>
  );
};

export default TextContainer;

TextContainer.propTypes = {
  title: PropTypes.string,
};
