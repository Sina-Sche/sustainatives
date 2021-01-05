import Header from "../components/Header";
import NavBar from "../components/NavBar";
import PageWrapper from "../components/PageWrapper";
import { useState } from "react";
import CategoryList from "../components/CategoryList";
import useActive from "../hooks/useActive";
import styled from "styled-components/macro";
import FAQComponent from "../components/FAQComponent";
import CompanyCard from "../components/CompanyCard";
import ToggleVisibility from "../components/ToggleVisibility";

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

        <ToggleVisibility
          title={"All categories"}
          type={"categories"}
          activeCategories={activeCategories}
          toggleActive={toggleActive}
        />

        <ToggleVisibility title={"Add a suggestion"} type={"add"} />
        <ToggleVisibility title={"FAQ"} type={"faq"} />
      </Container>
      <NavBar />
    </PageWrapper>
  );
};
