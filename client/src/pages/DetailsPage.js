import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ProductDetails from "../components/ProductDetails";
import { getProductById } from "../utils/api";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import PageWrapper from "../components/PageWrapper";

export const DetailsPage = () => {
  const { id } = useParams();
  const { data, isError, error, isLoading } = useQuery(["product", id], () =>
    getProductById(id)
  );

  return (
    <PageWrapper>
      <Header title={"Discover"} />
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error.message}</div>}
      {data && <ProductDetails {...data} />}
      <NavBar />
    </PageWrapper>
  );
};
