import ProductText from "./ProductText";
import SmallImage from "./SmallImage";
import Bambook from "../assets/images/bambook.jpg";
import styled from "styled-components";

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 1rem;
  box-shadow: 0px 2px 2px -2px var(--icon-inactive-color);
`;
const SearchResult = () => {
  return (
    <InfoContainer>
      <SmallImage imgSrc={Bambook} alt={"Bambook"} />
      <ProductText />
    </InfoContainer>
  );
};

export default SearchResult;
