import Header from "../components/Header";
import NavBar from "../components/NavBar";
import PageWrapper from "../components/PageWrapper";
import { useState } from "react";
import CategoryList from "../components/CategoryList";
import useActive from "../hooks/useActive";
import styled from "styled-components/macro";
import FAQComponent from "../components/FAQComponent";
import CompanyCard from "../components/CompanyCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin: 15px;
  }
  button {
    color: var(--secondary-color);
  }
`;

export const AboutPage = () => {
  const { activeCategories, toggleActive } = useActive();
  const [visibleFAQ, setVisibleFAQ] = useState(false);
  const [visibleCat, setVisibleCat] = useState(false);
  const [visibleCom, setVisibleCom] = useState(false);

  const handleFAQClick = () => {
    setVisibleFAQ(!visibleFAQ);
  };
  const handleCatClick = () => {
    setVisibleCat(!visibleCat);
  };
  const handleComClick = () => {
    setVisibleCom(!visibleCom);
  };
  return (
    <PageWrapper>
      <Header title={"About"} />
      <Container>
        <h2>What is a SustainAtive?</h2>
        <span>
          In short: A product that is <i>sustainable</i>, made from{" "}
          <i>recycled materials</i> and produced by a company that has a{" "}
          <i>positive impact on the environment.</i>
        </span>

        <button onClick={handleCatClick}>
          <h3>Product Categories ▶</h3>
        </button>
        {visibleCat && (
          <CategoryList
            activeCategories={activeCategories}
            toggleActive={toggleActive}
            onClick={() => {
              alert("Click");
            }}
          />
        )}
        <button onClick={handleComClick}>
          <h3>Supported Companies ▶</h3>
        </button>
        {visibleCom && (
          <>
            <CompanyCard />
          </>
        )}
        <button onClick={handleFAQClick}>
          <h3>FAQ ▶</h3>
        </button>
        {visibleFAQ && <FAQComponent />}
      </Container>
      <NavBar />
    </PageWrapper>
  );
};
