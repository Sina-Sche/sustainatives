import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import ProductList from "../components/ProductList";
import NavBar from "../components/NavBar";

export const HomePage = () => {
  return (
    <>
      <Header title={"SustainAtives"} />
      <LargeCard title={"Bambook Notebook"} />
      <ProductList />
      <NavBar />
    </>
  );
};
