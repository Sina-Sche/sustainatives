import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ProductDetails from "../components/ProductDetails";
import { getProductById } from "../utils/api";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useAsync from "../hooks/useAsync";

export const DetailsPage = () => {
  const { id } = useParams();
  const { data, error, loading, fetchData } = useAsync(getProductById, id);

  useEffect(() => {
    fetchData();
  }, [fetchData, id]);

  return (
    <>
      <Header title={"Discover"} />
      {loading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {data && <ProductDetails {...data} />}

      <NavBar />
    </>
  );
};
