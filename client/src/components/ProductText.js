import styled from "styled-components/macro";
import PropTypes from "prop-types";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 16px;
  width: 200px;
  height: 150px;
  overflow: auto;
  h3 {
    align-self: flex-start;
    padding: 0;
  }
  h5 {
    align-self: flex-end;
    margin-right: 15px;
    padding-top: 5px;
  }
  p {
    color: var(--info-text-color);
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const ProductText = ({ display_title, price, description }) => {
  return (
    <InfoContainer>
      <h3>{display_title}</h3>
      <p>{description}</p>
      <h5>{price}</h5>
    </InfoContainer>
  );
};

export default ProductText;

ProductText.propTypes = {
  display_title: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
};
