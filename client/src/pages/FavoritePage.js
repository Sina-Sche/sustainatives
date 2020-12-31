import InfoBox from "../components/InfoBox";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import useFavorites from "../hooks/useFavorites";
import PageWrapper from "../components/PageWrapper";
import NoFavorites from "../components/NoFavorites";
import { getFavorites } from "../utils/api";
import { useEffect } from "react";
import { useQuery } from "react-query";

export const FavoritePage = () => {
  const { toggleFavorite, favorites } = useFavorites("favorites", []);
  const { data, error, isError, isLoading, refetch } = useQuery(
    ["products", favorites],
    () => getFavorites(favorites)
  );

  useEffect(() => {
    refetch(favorites);
  }, [favorites, refetch]);

  return (
    <PageWrapper>
      <Header title={"Favorites"} />

      {isLoading && <div>Loading...</div>}
      {isError && <div>{error.message}</div>}
      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <>
          <h2>My favorite Products</h2>
          {data?.map((product) => {
            return (
              <InfoBox
                key={product.id}
                id={product.id}
                size={"small"}
                {...product}
                onClick={() => toggleFavorite(product.id)}
                isFavorite={favorites.includes(product.id)}
              />
            );
          })}
        </>
      )}
      <NavBar />
    </PageWrapper>
  );
};
