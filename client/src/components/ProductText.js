import styled from "styled-components/macro";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem;
  h3 {
    align-self: flex-start;
    padding: 0;
    color: var(--secondary-color);
  }
  h5 {
    align-self: flex-end;
    margin-right: 1.5rem;
    padding-top: 0.5rem;
  }
`;

const ProductText = () => {
  return (
    <InfoContainer>
      <h3>Bambook Notebook</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis alias ad
        tenetur nemo pariatur.
      </p>
      <h5>12€</h5>
    </InfoContainer>
  );
};

export default ProductText;
