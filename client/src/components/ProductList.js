import styled from "styled-components/macro";
import Image from "./Image";
import { useEffect } from "react";
import { getProducts } from "../utils/api";
import useAsync from "../hooks/useAsync";
import PropTypes from "prop-types";
import useFavorites from "../hooks/useFavorites";

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
  const { data, loading, error, fetchData } = useAsync(() => getProducts());
  const { toggleFavorite, favorites } = useFavorites("favorites", []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ListContainer>
      {loading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {data &&
        data.map((product) => {
          return (
            <li key={product.id}>
              <Image
                src={product.image}
                alt={product.title}
                id={product.id}
                size={"small"}
                onClick={() => toggleFavorite(product.id)}
                isFavorite={favorites.includes(product.id)}
              />
            </li>
          );
        })}
    </ListContainer>
  );
};

export default ProductList;

ProductList.propTypes = {
  onClick: PropTypes.func,
  isFavorite: PropTypes.bool,
};
