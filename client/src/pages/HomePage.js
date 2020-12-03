import Header from "../components/Header";
import ProductPreview from "../components/ProductPreview";
import ProductList from "../components/ProductList";
import NavBar from "../components/NavBar";
import Bambook from "../assets/images/bambook.jpg";
import PropTypes from "prop-types";

export const HomePage = () => {
  return (
    <>
      <Header title={"SustainAtives"} />
      <ProductPreview primary={true} src={Bambook} title={"Bambook Notebook"} />
      <ProductList />
      <NavBar />
    </>
  );
};

HomePage.propTypes = {
  onClick: PropTypes.func,
  isFavorite: PropTypes.bool,
};
