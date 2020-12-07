import Header from "../components/Header";
import NavBar from "../components/NavBar";
import PropTypes from "prop-types";
import ProductDetails from "../components/ProductDetails";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useAsync from "../hooks/useAsync";
import { getProductById } from "../utils/api";

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
      <ProductDetails
        src={data?.image}
        alt={data?.title}
        title={data?.display_name}
        price={data?.price}
        description={data?.description}
        url={data?.url}
      />
      <NavBar />
    </>
  );
};

DetailsPage.propTypes = {
  onClick: PropTypes.func,
  isFavorite: PropTypes.bool,
};
