import Header from "../components/Header";
import NavBar from "../components/NavBar";
import PropTypes from "prop-types";
import ProductDetails from "../components/ProductDetails";

export const DetailsPage = () => {
  return (
    <>
      <Header title={"Discover"} />
      <ProductDetails />
      <NavBar />
    </>
  );
};

DetailsPage.propTypes = {
  onClick: PropTypes.func,
  isFavorite: PropTypes.bool,
};
