import SearchResult from "./SearchResult";
import Input from "../components/Input";
import CategoryList from "../components/CategoryList";
import { getProductsByCategory, getProductsByTitle } from "../utils/api";
import { useState, useEffect, useCallback } from "react";
import { useQuery } from "react-query";
import useFavorites from "../hooks/useFavorites";
import useDebounce from "../hooks/useDebounce";
import useActive from "../hooks/useActive";
import { FilterButton, SmallButton } from "../components/Buttons";
import styled from "styled-components/macro";
import icons from "./CategoryIcons";

const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const SearchPageContent = () => {
  const { favorites, toggleFavorite } = useFavorites("favorites", []);
  const { activeCategories, setActiveCategories, toggleActive } = useActive([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [visible, setVisible] = useState(false);
  const [filterData, setFilterData] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 400);
  const { data, isLoading, isError, error, refetch } = useQuery(
    ["products", debouncedSearchTerm],
    () => getProductsByTitle(debouncedSearchTerm),
    {
      enabled: false,
    }
  );
  const filterByCategory = useCallback(async () => {
    if (activeCategories && data) {
      const products = data
        ?.filter((products) => {
          return products.categories.includes(activeCategories.toString());
        })
        .map((product) => {
          return product;
        });
      setFilterData(products);
      return products;
    }
    if (activeCategories.length > 0) {
      const filterAll = async () => {
        const products = await getProductsByCategory(activeCategories);
        setFilterData(products);
        return products;
      };
      filterAll();
    }
  }, [activeCategories, data]);

  useEffect(() => {
    if (debouncedSearchTerm && activeCategories) {
      filterByCategory();
    }
    if (debouncedSearchTerm) {
      refetch();
    }
  }, [debouncedSearchTerm, activeCategories, refetch, filterByCategory]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleShow = () => {
    setVisible(!visible);
  };

  const handleFilterClick = () => {
    filterByCategory();
  };
  const handleRemoveClick = () => {
    setActiveCategories([]);
    setFilterData("");
  };
  return (
    <>
      <Input
        type={"search"}
        value={searchTerm}
        onChange={handleChange}
        onSubmit={handleSubmit}
        placeholder={"What are you looking for?"}
      />
      <FilterButton onClick={handleShow} />
      {visible && (
        <>
          <CategoryList
            visible={visible}
            activeCategories={activeCategories}
            toggleActive={toggleActive}
            onClick={handleFilterClick}
          />
        </>
      )}
      {searchTerm && <h6>Your search results for {searchTerm}</h6>}
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error.message}</div>}
      {activeCategories.length > 0 ? (
        <>
          <h6>
            Products related to the category: {icons[activeCategories].label}
          </h6>
          {filterData.length > 0 ? (
            <>
              <SmallButton
                onClick={handleRemoveClick}
                title={"Remove Filter"}
              />
              <SearchResult
                type={"filter"}
                filterData={filterData}
                toggleFavorite={toggleFavorite}
                favorites={favorites}
              />
            </>
          ) : (
            <ButtonContainer>
              <SmallButton onClick={handleFilterClick} title={"Apply Filter"} />
            </ButtonContainer>
          )}
        </>
      ) : data ? (
        data.length > 0 ? (
          <SearchResult
            filterData={data}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        ) : (
          <div>Nothing found for your search</div>
        )
      ) : (
        <h6>Type in a search term or choose a category filter</h6>
      )}
    </>
  );
};
export default SearchPageContent;
