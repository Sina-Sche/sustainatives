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
  border: ${(props) =>
    props.primary
      ? "2px solid var(--secondary-color)"
      : "1px solid var(--secondary-color)"};
  border-radius: 50px;
`;

const TextContainer = ({ title, primary }) => {
  return (
    <Container primary={primary}>
      <h3>{title}</h3>
    </Container>
  );
};

export default TextContainer;
TextContainer.propTypes = {
  primary: PropTypes.bool,
  title: PropTypes.string,
};
