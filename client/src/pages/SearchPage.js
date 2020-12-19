import Header from "../components/Header";
import Input from "../components/Input";
import CategoryList from "../components/CategoryList";
import NavBar from "../components/NavBar";
import InfoBox from "../components/InfoBox";
import { getProductsByTitle } from "../utils/api";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import useFavorites from "../hooks/useFavorites";
import useDebounce from "../hooks/useDebounce";
import PageWrapper from "../components/PageWrapper";

export const SearchPage = () => {
  const { favorites, toggleFavorite } = useFavorites("favorites", []);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 400);
  const { data, isLoading, isError, error, refetch } = useQuery(
    ["products", debouncedSearchTerm],
    () => getProductsByTitle(debouncedSearchTerm),
    { enabled: false }
  );

  useEffect(() => {
    if (debouncedSearchTerm) {
      refetch();
    }
  }, [debouncedSearchTerm, refetch]);

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
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error.message}</div>}
      {data?.map((product) => {
        return (
          <InfoBox
            key={product._id}
            size={"small"}
            {...product}
            onClick={() => toggleFavorite(product.id)}
            isFavorite={favorites.includes(product.id)}
          />
        );
      })}

      <NavBar />
    </PageWrapper>
  );
};
