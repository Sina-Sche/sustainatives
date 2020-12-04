import ProductText from "./ProductText";
import SmallImage from "./SmallImage";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  box-shadow: 0px 2px 2px -2px var(--icon-inactive-color);
`;
const InfoBox = ({ src, title, price, description }) => {
  return (
    <InfoContainer>
      <SmallImage src={src} alt={"Bambook"} />
      <ProductText title={title} price={price} description={description} />
    </InfoContainer>
  );
};

export default InfoBox;

InfoBox.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
};
