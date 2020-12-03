import styled from "styled-components/macro";
import ProductPreview from "./ProductPreview";
import { useState } from "react";
import { useEffect } from "react";
import { getProducts } from "../utils/api";

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;
  padding-top: 15px;
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const products = await getProducts();
      setProducts(products);
      console.log(products);
    }
    fetchData();
  }, []);
  return (
    <ListContainer>
      {products &&
        products.map((product) => {
          return (
            <li key={product.id}>
              <ProductPreview
                src={product.image}
                title={product.shorthand}
                size={"small"}
              />
            </li>
          );
        })}
    </ListContainer>
  );
};

export default ProductList;
