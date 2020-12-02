import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Container = styled.div`
  position: absolute;
  justify-content: center;
  align-self: center;
  width: 80%;
  margin: 10px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid var(--secondary-color);
`;

export const ContainerSmall = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  position: absolute;
  width: 80%;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid var(--secondary-color);
  border-radius: 50px;
`;
export const TextContainer = ({ title }) => {
  return (
    <Container>
      <h3>{title}</h3>
    </Container>
  );
};
export const TextContainerSmall = ({ title }) => {
  return (
    <ContainerSmall>
      <h3>{title}</h3>
    </ContainerSmall>
  );
};

TextContainer.propTypes = {
  title: PropTypes.string,
};

TextContainerSmall.propTypes = {
  title: PropTypes.string,
};
