import styled from "styled-components/macro";
import treeAnimationSrc from "../assets/images/LottieDark.gif";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--secondary-color);
  h1 {
    font-size: 3rem;
    color: white;
    padding: 5px;
  }
  h5 {
    color: white;
    font-size: 1.5rem;
  }
  h6 {
    color: white;
    font-size: 1.5rem;
  }
  img {
    max-width: 100%;
  }
`;

export const SplashPage = () => {
  return (
    <Container>
      <h1>SustainAtives</h1>
      <img src={treeAnimationSrc} alt="tree Animation" />
      <h5>Sustainable Alternatives</h5>
      <h6>for everyday products</h6>
    </Container>
  );
};
