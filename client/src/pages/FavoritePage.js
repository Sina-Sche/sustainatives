import InfoBox from "../components/InfoBox";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import useFavorites from "../hooks/useFavorites";
import { getProductById, getProducts } from "../utils/api";
import useAsync from "../hooks/useAsync";
import { useEffect, useState } from "react";
import ProductText from "../components/ProductText";

export const FavoritePage = () => {
  const { toggleFavorite, favorites, setFavorites } = useFavorites(
    "favorites",
    []
  );
  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, [favorites]);
  const getData = async () => {
    const promiseData = favorites.map(async (id) => getProductById(id));
    const newData = await Promise.all(promiseData);
    setData(newData);
    console.log(data);
    return data;
  };

  return (
    <>
      <Header title={"Favorites"} />
      <h2>My favorite Products</h2>
      {data &&
        data.map((product) => {
          return (
            <InfoBox
              key={product.id}
              id={product.id}
              size={"small"}
              src={product.image}
              alt={product.title}
              title={product.display_title}
              description={product.description}
              price={product.price}
            />
          );
        })}
      <NavBar />
    </>
  );
};
