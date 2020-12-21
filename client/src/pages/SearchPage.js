import Header from "../components/Header";
import Input from "../components/Input";
import CategoryList from "../components/CategoryList";
import NavBar from "../components/NavBar";
import InfoBox from "../components/InfoBox";
import { getProductsByCategory, getProductsByTitle } from "../utils/api";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import useFavorites from "../hooks/useFavorites";
import useDebounce from "../hooks/useDebounce";
import PageWrapper from "../components/PageWrapper";
import useActive from "../hooks/useActive";
import styled from "styled-components";
import { ReactComponent as Filter } from "../assets/icons/filter.svg";

const Button = styled.button`
  border: 1px solid var(--secondary-color);
  border-radius: 50px;
  padding: 10px;
  background: var(--secondary-color);
  width: 90%;
  display: flex;
  justify-content: center;
  margin: auto;
  line-height: 1;
  h3 {
    font-size: 1rem;
    color: var(--primary-color);
  }
  svg {
    height: 20px;
    width: auto;
    fill: var(--primary-color);
  }
`;

export const SearchPage = () => {
  const { favorites, toggleFavorite } = useFavorites("favorites", []);
  const [filterData, setFilterData] = useState("");
  const { activeCategories, toggleActive } = useActive([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [visible, setVisible] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 400);
  const { data, isLoading, isError, error, refetch } = useQuery(
    ["products", debouncedSearchTerm],
    () => getProductsByTitle(debouncedSearchTerm),
    { enabled: false }
  );

  useEffect(() => {
    if (debouncedSearchTerm && activeCategories) {
      filterByCategory();
    }
    if (debouncedSearchTerm) {
      refetch();
    }
  }, [debouncedSearchTerm, refetch, activeCategories]);

  const filterByCategory = async () => {
    if (activeCategories && data) {
      const product = data
        ?.filter((product) => {
          return product.categories.includes(activeCategories.toString());
        })
        .map((product) => {
          return product;
        });
      setFilterData(product);
      return product;
    } else {
      const filterAll = async () => {
        const filterAllData = await getProductsByCategory(activeCategories);
        setFilterData(filterAllData);
        return filterData;
      };
      filterAll();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterByCategory();
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleShow = () => {
    setVisible(!visible);
  };

  return (
    <PageWrapper>
      <Header title={"Browse"} />
      <Input
        type={"search"}
        value={searchTerm}
        onChange={handleChange}
        onSubmit={handleSubmit}
        placeholder={"What are you looking for?"}
      />
      <Button onClick={handleShow}>
        <Filter />
        <h3>Filter by categories</h3>
      </Button>
      {visible && (
        <CategoryList
          visible={visible}
          activeCategories={activeCategories}
          toggleActive={toggleActive}
        />
      )}

      {searchTerm && <h2>Your search results for {searchTerm}</h2>}
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error.message}</div>}
      {filterData?.length > 0
        ? filterData.map((product) => {
            return (
              <InfoBox
                key={product._id}
                size={"small"}
                {...product}
                onClick={() => toggleFavorite(product.id)}
                isFavorite={favorites.includes(product.id)}
              />
            );
          })
        : data?.map((product) => {
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
