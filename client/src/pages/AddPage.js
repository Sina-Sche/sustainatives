import Header from "../components/Header";
import styled from "styled-components/macro";
import NavBar from "../components/NavBar";
import Input from "../components/Input";
import CategoryList from "../components/CategoryList";
import { ReactComponent as Add } from "../assets/icons/plus.svg";
import useActive from "../hooks/useActive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    height: 15vh;
    width: 90vw;
    background: white;
    border: 1px solid var(--icon-active-color);
    margin: 20px;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
  }
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
    <Container>
      <Header title={"Add a SustainAtive"} />
      <Input placeholder={"Enter Product Name"} />
      <Input placeholder={"Enter Product URL"} />
      <div>
        <h5>Upload a product photo here</h5>
        <p>📷</p>
      </div>
      <div>
        <h5>Add a description for your Product</h5>
        <p>🧾</p>
      </div>
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
  );
};
