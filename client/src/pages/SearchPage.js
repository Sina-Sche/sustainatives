import Header from "../components/Header";
import Input from "../components/Input";
import CategoryList from "../components/CategoryList";
import NavBar from "../components/NavBar";
import InfoBox from "../components/InfoBox";
import { getProductsByTitle } from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAsync from "../hooks/useAsync";

export const SearchPage = () => {
  const [inputValue, setInputValue] = useState("");
  const { data, error, loading, fetchData } = useAsync(() =>
    getProductsByTitle(inputValue)
  );

  useEffect(() => {
    fetchData();
  }, [inputValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <>
      <Header title={"Browse"} />
      <Input
        type={"search"}
        onChange={handleChange}
        onSubmit={handleSubmit}
        placeholder={"What are you looking for?"}
      />
      <CategoryList />
      {inputValue && <h2>Your search results for {inputValue}</h2>}
      {loading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}

      {inputValue &&
        data.map((product) => {
          return (
            <>
              <InfoBox
                key={product.id}
                id={product.id}
                size={"small"}
                {...product}
              />
            </>
          );
        })}

      <NavBar />
    </>
  );
};
