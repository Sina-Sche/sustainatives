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
    margin: 0;
    padding: 0;
  }
  h6 {
    text-align: left;
    margin-bottom: 0;
    align-self: flex-start;
    padding: 0;
    padding-top: 5px;
  }
  h5 {
    align-self: flex-end;
    margin-right: 15px;
    padding-top: 5px;
  }
  p {
    color: var(--info-text-color);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  div {
    display: flex;
    justify-content: flex-end;
  }
  :first-child {
    text-align: left;
  }
`;

const ProductText = ({ display_title, price, description, company_name }) => {
  return (
    <InfoContainer>
      <h6>{company_name}</h6>
      <h3>{display_title}</h3>
      <p>{description}</p>
      <div>
        <h5>{price}</h5>
      </div>
    </InfoContainer>
  );
};

export default ProductText;

ProductText.propTypes = {
  display_title: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  company_name: PropTypes.string,
};
