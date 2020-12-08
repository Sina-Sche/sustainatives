import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ProductDetails from "../components/ProductDetails";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProductById } from "../utils/api";
import useAsync from "../hooks/useAsync";

export const DetailsPage = () => {
  const { id } = useParams();
  const { data, error, loading, fetchData } = useAsync(() =>
    getProductById(id)
  );

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <>
      <Header title={"Discover"} />
      {loading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {data && <ProductDetails data={data} />}

      <NavBar />
    </>
  );
};

DetailsPage.propTypes = {
  onClick: PropTypes.func,
  isFavorite: PropTypes.bool,
};
