import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import ProductList from "../components/ProductList";
import NavBar from "../components/NavBar";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const HomePage = ({ onClick, isFavorite }) => {
  return (
    <>
      <Header title={"SustainAtives"} />
      <Link to={"/details"}>
        <LargeCard
          title={"Bambook Notebook"}
          onClick={onClick}
          isFavorite={isFavorite}
        />
      </Link>
      <ProductList />
      <NavBar />
    </>
  );
};

HomePage.propTypes = {
  onClick: PropTypes.func,
  isFavorite: PropTypes.bool,
};
