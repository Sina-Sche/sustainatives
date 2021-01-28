import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ProductDetails from "../components/ProductDetails";
import { getProductById } from "../utils/api";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import PageWrapper from "../components/PageWrapper";
import styled from "styled-components";

const PageWrapperFlex = styled(PageWrapper)`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding: 62px 0 62px;
  width: 100%;
`;
const Content = styled.div`
  @media only screen and (min-width: 945px) {
    align-self: flex-start;
    padding-left: 25%;
    padding-top: 62px;
    padding-bottom: 62px;
  }
`;
export const DetailsPage = () => {
  const { id } = useParams();
  const { data, isError, error, isLoading } = useQuery(["product", id], () =>
    getProductById(id)
  );

  return (
    <PageWrapperFlex>
      <Header title={"Discover"} />
      <Content>
        {isLoading && <div>Loading...</div>}
        {isError && <div>{error.message}</div>}
        {data && <ProductDetails {...data} />}
      </Content>
      <NavBar />
    </PageWrapperFlex>
  );
};
