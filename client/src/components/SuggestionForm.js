import styled from "styled-components/macro";
import { ReactComponent as Add } from "../assets/icons/plus.svg";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { postProductSuggestion } from "../utils/api";

const AddIcon = styled(Add)`
  height: 50px;
  width: 50px;
  border: 1px solid var(--icon-active-color);
  border-radius: 50px;
  padding: 5px;
  fill: var(--icon-active-color);
  margin: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin: auto;
  border-radius: 50px;
  border: 1px solid var(--secondary-color);
  padding: 10px;
  h4 {
    font-size: 1.2rem;
  }
  h6 {
    text-align: left;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
  button {
    margin-top: 10px;
  }
`;
const Input = styled.input`
  border: none;
  height: 40px;
  width: 90%;
  border: 1px solid var(--icon-active-color);
  border-radius: 50px;
  padding: 10px;
`;

const SuggestionForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (product) => {
    const result = await postProductSuggestion(product);
    return result;
  };
  return (
    <>
      <Container>
        <h4>
          Do you know a product that qualifies as a SustainAtive that you could
          not find in our app?
        </h4>
        <p>
          We are always open to suggestions! Send us info about the product, you
          think we are missing and we will run our checks. If the product
          qualifies according to our standards we will add it to our collection.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h6>Product Name:</h6>
          <Input
            placeholder={"Enter Product Name"}
            name="productName"
            ref={register({ required: true })}
          />
          {errors.productName && <p>This field is required!</p>}
          <h6>Product Web Address:</h6>
          <Input
            placeholder={"Enter Product URL"}
            name="productURL"
            ref={register({ required: true })}
          />
          {errors.productURL && <p>This field is required!</p>}
          <h6>Product Description:</h6>
          <Input
            placeholder={"Add a short description"}
            name="productDescription"
            ref={register({ required: true })}
          />
          {errors.productDescription && <p>This field is required!</p>}

          <button>
            <AddIcon />
          </button>
        </form>
      </Container>
    </>
  );
};

SuggestionForm.propTypes = {
  activeCategories: PropTypes.array,
  toggleActive: PropTypes.func,
};

export default SuggestionForm;
