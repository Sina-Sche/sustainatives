import Header from "../components/Header";
import ProductPreview from "../components/ProductPreview";
import ProductList from "../components/ProductList";
import NavBar from "../components/NavBar";
import PropTypes from "prop-types";
import { getRandomProduct } from "../utils/api";
import { useQuery } from "react-query";
import useFavorites from "../hooks/useFavorites";

export const HomePage = () => {
  const { toggleFavorite, favorites } = useFavorites("favorites", []);

  const { data, isLoading, isError, error } = useQuery(
    "product",
    getRandomProduct,
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  return (
    <>
      <Header title={"SustainAtives"} />
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error.message}</div>}
      {data && (
        <ProductPreview
          {...data}
          onClick={() => toggleFavorite(data.id)}
          isFavorite={favorites.includes(data.id)}
        />
      )}
      <ProductList toggleFavorite={toggleFavorite} favorites={favorites} />
      <NavBar />
    </>
  );
};

HomePage.propTypes = {
  onClick: PropTypes.func,
  isFavorite: PropTypes.bool,
};
