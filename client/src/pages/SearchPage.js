import Header from "../components/Header";
import Input from "../components/Input";
import CategoryOverview from "../components/CategoryOverview";
import NavBar from "../components/NavBar";
import InfoBox from "../components/InfoBox";
import { getProductsByTitle } from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAsync from "../hooks/useAsync";

export const SearchPage = () => {
  const [title, setTitle] = useState("");
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
      <Input type={"search"} onChange={handleChange} onSubmit={handleSubmit} />
      <CategoryOverview />
      {inputValue && <h2>Your search results for {inputValue}</h2>}
      {loading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      <Link to={"/details"}>
        {inputValue &&
          data.map((product) => {
            return (
              <InfoBox
                key={product.id}
                size={"small"}
                src={product.image}
                alt={product.title}
                title={product.display_title}
                description={product.description}
                price={product.price}
              />
            );
          })}
      </Link>

      <NavBar />
    </>
  );
};
