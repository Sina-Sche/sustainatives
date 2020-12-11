import styled from "styled-components/macro";
import PropTypes from "prop-types";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  position: absolute;
  width: 80%;
  max-width: 700px;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid var(--secondary-color);
  border-radius: 50px;
`;

const TextContainer = ({ display_title }) => {
  return (
    <Container>
      <h3>{display_title}</h3>
    </Container>
  );
};

export default TextContainer;
TextContainer.propTypes = {
  display_title: PropTypes.string,
};
