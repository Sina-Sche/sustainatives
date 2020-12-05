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
  const [inputValue, setInputValue] = useState("");
  const { data, error, loading, fetchData } = useAsync(() =>
    getProductsByTitle(inputValue)
  );

  useEffect(() => {
    fetchData();
  }, [inputValue]);

  return (
    <>
      <Header title={"Browse"} />
      <Input type={"search"} onChange={(e) => setInputValue(e.target.value)} />
      <CategoryOverview />
      {inputValue && <h2>Your search results for {inputValue}</h2>}
      {loading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      <Link to={"/details"}>
        {data &&
          data.map((product) => {
            return (
              <InfoBox
                key={product.id}
                size={"small"}
                src={product.image}
                title={product.title}
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
