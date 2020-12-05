import styled from "styled-components/macro";
import Image from "./Image";
import { useState, useEffect } from "react";
import { getProducts } from "../utils/api";

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;
  row-gap: 10px;
  padding-top: 15px;
  align-items: center;
  align-content: center;
  justify-items: center;
  margin: 5px;
  li {
    min-width: 175px;
    min-height: 175px;
  }
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const products = await getProducts();
      setProducts(products);
    }
    fetchData();
  }, []);
  return (
    <ListContainer>
      {products &&
        products.map((product) => {
          return (
            <li key={product.id}>
              <Image src={product.image} size={"small"} />
            </li>
          );
        })}
    </ListContainer>
  );
};

export default ProductList;
