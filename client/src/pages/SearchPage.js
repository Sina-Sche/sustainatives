import Header from "../components/Header";
import Input from "../components/Input";
import CategoryOverview from "../components/CategoryOverview";
import NavBar from "../components/NavBar";
import InfoBox from "../components/InfoBox";
import { getProductsByTitle } from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const doFetch = async () => {
      const products = await getProductsByTitle(inputValue);
      setProducts(products);
      console.log(products);
    };
    doFetch();
  }, [inputValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };
  return (
    <>
      <Header title={"Browse"} />
      <Input type={"search"} onSubmit={handleSubmit} onChange={handleChange} />
      <CategoryOverview />
      <Link to={"/details"}>
        {products &&
          products.map((product) => {
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
