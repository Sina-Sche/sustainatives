import styled from "styled-components/macro";
import { useDict } from "../contexts/i18n";
import React from "react";

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
    color: var(--secondary-color);
    align-self: flex-end;
    margin-right: 1.5rem;
    padding-top: 0.5rem;
  }
`;

const ProductText = () => {
  const dict = useDict();
  return (
    <InfoContainer>
      <h3>{dict.product}</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis alias ad
        tenetur nemo pariatur.
      </p>
      <h5>{dict.price}</h5>
    </InfoContainer>
  );
};

export default ProductText;
