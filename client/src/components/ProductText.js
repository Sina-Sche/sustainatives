import styled from "styled-components/macro";
import PropTypes from "prop-types";

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

const ProductText = ({ title, price, description }) => {
  return (
    <InfoContainer>
      <h3>{title}</h3>
      <p>{description}</p>
      <h5>{price}</h5>
    </InfoContainer>
  );
};

export default ProductText;

ProductText.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
};
