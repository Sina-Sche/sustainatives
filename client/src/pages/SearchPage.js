import Header from "../components/Header";
import Input from "../components/Input";
import CategoryOverview from "../components/CategoryOverview";
import NavBar from "../components/NavBar";
import InfoBox from "../components/InfoBox";
import { getProducts } from "../utils/api";
import { useEffect } from "react";
import { useState } from "react";

export const SearchPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const products = await getProducts();
      setProducts(products);
      console.log(products);
    }
    fetchData();
  }, []);
  return (
    <>
      <Header title={"Browse"} />
      <Input placeholder={"Search for a product..."} type={"search"} />
      <CategoryOverview />
      {products &&
        products.map((product) => {
          return (
            <InfoBox
              key={product.id}
              src={product.image}
              title={product.shorthand}
              price={product.price}
              description={product.description}
            />
          );
        })}
      <NavBar />
    </>
  );
};
