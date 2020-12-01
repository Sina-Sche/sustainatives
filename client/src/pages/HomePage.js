import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import ProductList from "../components/ProductList";
import NavBar from "../components/NavBar";
import PropTypes from "prop-types";

export const HomePage = ({ onClick, isFavorite }) => {
  return (
    <>
      <Header title={"SustainAtives"} />
      <LargeCard
        title={"Bambook Notebook"}
        onClick={onClick}
        isFavorite={isFavorite}
      />
      <ProductList />
      <NavBar />
    </>
  );
};

HomePage.propTypes = {
  onClick: PropTypes.func,
  isFavorite: PropTypes.bool,
};
