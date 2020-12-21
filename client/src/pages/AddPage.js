import Header from "../components/Header";
import styled from "styled-components/macro";
import NavBar from "../components/NavBar";
import Input from "../components/Input";
import CategoryList from "../components/CategoryList";
import { ReactComponent as Add } from "../assets/icons/plus.svg";
import PageWrapper from "../components/PageWrapper";
import useActive from "../hooks/useActive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    margin: 15px;
  }
`;

const Subheader = styled.h5`
  margin: 30px;
  text-align: center;
`;

const AddIcon = styled(Add)`
  height: 50px;
  width: 50px;
  border: 1px solid var(--icon-active-color);
  border-radius: 50px;
  padding: 5px;
  fill: var(--icon-active-color);
  margin: auto;
`;

export const AddPage = () => {
  const { activeCategories, toggleActive } = useActive([]);

  return (
    <PageWrapper>
      <Container>
        <Header title={"Add a SustainAtive"} />
        <Input placeholder={"Enter Product Name"} />
        <Input placeholder={"Enter Product URL"} />
        <Input placeholder={"Enter Image URL"} />
        <Input placeholder={"Add a description for your product"} />
        <Subheader>
          Choose the relevant categories for your product by clicking on them:
        </Subheader>
        <CategoryList
          activeCategories={activeCategories}
          toggleActive={toggleActive}
        />
        <button>
          <AddIcon />
        </button>
        <NavBar />
      </Container>
    </PageWrapper>
  );
};
