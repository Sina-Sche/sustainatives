import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Input from "../components/Input";
import CategoryOverview from "../components/CategoryOverview";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 15vh;
  background: white;
  border: 1px solid var(--icon-active-color);
  margin: 20px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

const Subheader = styled.h5`
  margin: 30px;
  text-align: center;
`;

export const AddPage = () => {
  return (
    <>
      <Header title={"Add a SustainAtive"} />
      <Input placeholder={"Enter Product Name"} />
      <Input placeholder={"Enter Product URL"} />
      <Container>
        <h5>Upload a product photo here</h5>
        <p>📷</p>
      </Container>
      <Container>
        <h5>Add a short description for your Product</h5>
        <p>🧾</p>
      </Container>
      <Subheader>
        Choose the relevant categories for your product by clicking on them:
      </Subheader>
      <CategoryOverview />
      <NavBar />
    </>
  );
};
