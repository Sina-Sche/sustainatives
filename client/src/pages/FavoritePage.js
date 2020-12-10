import InfoBox from "../components/InfoBox";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import useFavorites from "../hooks/useFavorites";
import { getProductById } from "../utils/api";
import { useEffect, useState } from "react";

export const FavoritePage = () => {
  const { favorites } = useFavorites("favorites", []);
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, [favorites]);

  const getData = async () => {
    const promiseData = favorites.map(async (id) => getProductById(id));
    const newData = await Promise.all(promiseData);
    setData(newData);
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
