import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { ProductList } from "../components/ProductList";
import { NavBar } from "../components/NavBar";

export const HomePage = () => {
  return (
    <>
      <Header title={"SustainAtives"} />
      <Card title={"Bambook"} />
      <ProductList />
      <NavBar />
    </>
  );
};
