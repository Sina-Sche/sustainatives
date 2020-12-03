import styled from "styled-components/macro";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 16px;
  h3 {
    align-self: flex-start;
    padding: 0;
  }
  h5 {
    align-self: flex-end;
    margin-right: 15px;
    padding-top: 5px;
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
