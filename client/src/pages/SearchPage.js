import Header from "../components/Header";
import Input from "../components/Input";
import CategoryList from "../components/CategoryList";
import NavBar from "../components/NavBar";
import InfoBox from "../components/InfoBox";
import { getProductsByTitle } from "../utils/api";
import { useState, useEffect, useCallback } from "react";
import useFavorites from "../hooks/useFavorites";
import useDebounce from "../hooks/useDebounce";
import useAsync from "../hooks/useAsync";

export const SearchPage = () => {
  const { favorites, toggleFavorite } = useFavorites("favorites", []);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 400);
  const [data, setData] = useState(null);
  const { loading, error } = useAsync();

  const getData = useCallback(async () => {
    return await getProductsByTitle(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    const searchData = async () => {
      if (debouncedSearchTerm) {
        setData(await getData());
      }
    };
    searchData();
  }, [debouncedSearchTerm, getData]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Header title={"Browse"} />
      <Input
        type={"search"}
        value={searchTerm}
        onChange={handleChange}
        onSubmit={(e) => e.preventDefault()}
        placeholder={"What are you looking for?"}
      />
      <CategoryList />
      {searchTerm && <h2>Your search results for {searchTerm}</h2>}
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
