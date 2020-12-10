import Header from "../components/Header";
import ProductPreview from "../components/ProductPreview";
import ProductList from "../components/ProductList";
import NavBar from "../components/NavBar";
import PropTypes from "prop-types";
import useAsync from "../hooks/useAsync";
import { useEffect } from "react";
import { getRandomProduct } from "../utils/api";
import useFavorites from "../hooks/useFavorites";

export const HomePage = () => {
  const { toggleFavorite, favorites } = useFavorites("favorites", []);

  const { data, error, loading, fetchData } = useAsync(() =>
    getRandomProduct()
  );

  useEffect(() => fetchData(), []);

  const handleClick = () => {
    toggleFavorite(data.id);
  };

  return (
    <>
      <Header title={"SustainAtives"} />
      {loading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {data && (
        <ProductPreview
          src={data.image}
          title={data.display_title}
          id={data.id}
          onClick={handleClick}
          favorites={favorites}
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
