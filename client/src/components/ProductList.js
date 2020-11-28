import { ProductCard } from "../components/ProductCard";
import styled from "styled-components/macro";

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;
  padding-bottom: 70px;
  padding-top: 15px;
`;

export const ProductList = () => {
  return (
    <ListContainer>
      <li>
        <ProductCard title={"Hairbrush"} />
      </li>
      <li>
        <ProductCard title={"Hairbrush"} />
      </li>
      <li>
        <ProductCard title={"Hairbrush"} />
      </li>
      <li>
        <ProductCard title={"Hairbrush"} />
      </li>
      <li>
        <ProductCard title={"Hairbrush"} />
      </li>
      <li>
        <ProductCard title={"Hairbrush"} />
      </li>
    </ListContainer>
  );
};
