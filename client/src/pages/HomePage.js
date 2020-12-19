import Header from "../components/Header";
import ProductPreview from "../components/ProductPreview";
import ProductList from "../components/ProductList";
import NavBar from "../components/NavBar";
import PropTypes from "prop-types";
import useAsync from "../hooks/useAsync";
import { useEffect } from "react";
import { getRandomProduct } from "../utils/api";
import useFavorites from "../hooks/useFavorites";
import PageWrapper from "../components/PageWrapper";

export const HomePage = () => {
  const { toggleFavorite, favorites } = useFavorites("favorites", []);

  const { data, error, loading, fetchData } = useAsync(getRandomProduct);

  useEffect(() => fetchData(), [fetchData]);

  return (
    <PageWrapper>
      <Header title={"SustainAtives"} />
      {loading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {data && (
        <ProductPreview
          {...data}
          onClick={() => toggleFavorite(data.id)}
          isFavorite={favorites.includes(data.id)}
        />
      )}
      <ProductList toggleFavorite={toggleFavorite} favorites={favorites} />
      <NavBar />
    </PageWrapper>
  );
};

HomePage.propTypes = {
  onClick: PropTypes.func,
  isFavorite: PropTypes.bool,
};
