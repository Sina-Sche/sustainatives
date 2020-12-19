import Header from "../components/Header";
import Input from "../components/Input";
import CategoryList from "../components/CategoryList";
import NavBar from "../components/NavBar";
import InfoBox from "../components/InfoBox";
import { getProductsByTitle } from "../utils/api";
import { useState, useEffect } from "react";
import useFavorites from "../hooks/useFavorites";
import useDebounce from "../hooks/useDebounce";
import useAsync from "../hooks/useAsync";
import PageWrapper from "../components/PageWrapper";

export const SearchPage = () => {
  const { favorites, toggleFavorite } = useFavorites("favorites", []);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 400);
  const { data, loading, error, fetchData } = useAsync(
    getProductsByTitle,
    debouncedSearchTerm
  );

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchData(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, fetchData]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <PageWrapper>
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
    </PageWrapper>
  );
};
