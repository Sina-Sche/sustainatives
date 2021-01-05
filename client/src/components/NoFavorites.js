import styled from "styled-components/macro";
import { ReactComponent as Heart } from "../assets/icons/heart.svg";
import { SearchButton } from "./Buttons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    margin-top: 30px;
  }
`;
const HeartIcon = styled(Heart)`
  fill: var(--secondary-color);
  height: 200px;
  align-self: center;
  justify-self: center;
  margin: 50px;
`;

const NoFavorites = () => {
  return (
    <Container>
      <h2>Ooops...nothing here yet...</h2>
      <HeartIcon />
      <SearchButton title={"Browse products"} />
    </Container>
  );
};

export default NoFavorites;
