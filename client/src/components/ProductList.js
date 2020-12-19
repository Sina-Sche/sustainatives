import styled from "styled-components/macro";
import Image from "./Image";
import PropTypes from "prop-types";
import { getProducts } from "../utils/api";
import { useQuery } from "react-query";

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

const ProductList = ({ toggleFavorite, favorites }) => {
  const { data, isLoading, isError, error } = useQuery(
    "products",
    getProducts,
    {
      refetchOnMount: false,
    }
  );

  return (
    <ListContainer>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error.message}</div>}
      {data &&
        data.map((product) => {
          return (
            <li key={product.id}>
              <Image
                size={"small"}
                onClick={() => {
                  toggleFavorite(product.id);
                }}
                isFavorite={favorites.includes(product.id)}
                {...product}
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
  toggleFavorite: PropTypes.func,
  favorites: PropTypes.array,
};
