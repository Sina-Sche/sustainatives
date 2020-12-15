import Header from "../components/Header";
import Input from "../components/Input";
import CategoryList from "../components/CategoryList";
import NavBar from "../components/NavBar";
import InfoBox from "../components/InfoBox";
import { getProductsByTitle } from "../utils/api";
import { useState, useEffect } from "react";
import useAsync from "../hooks/useAsync";
import useFavorites from "../hooks/useFavorites";

export const SearchPage = () => {
  const { favorites, toggleFavorite } = useFavorites("favorites", []);
  const [inputValue, setInputValue] = useState("");
  const { data, error, loading, fetchData } = useAsync(
    getProductsByTitle,
    inputValue
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
    fetchData();
  };

  return (
    <>
      <Header title={"Browse"} />
      <Input
        type={"search"}
        value={inputValue}
        onChange={handleChange}
        onSubmit={handleSubmit}
        placeholder={"What are you looking for?"}
      />
      <CategoryList />
      {inputValue && <h2>Your search results for {inputValue}</h2>}
      {loading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}

      {data?.map((product) => {
        return (
          <>
            <InfoBox
              key={product.id}
              size={"small"}
              {...product}
              onClick={() => toggleFavorite(product.id)}
              isFavorite={favorites.includes(product.id)}
            />
          </>
        );
      })}

      <NavBar />
    </>
  );
};
