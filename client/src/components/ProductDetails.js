import styled, { css } from "styled-components/macro";
import { ReactComponent as Bamboo } from "../assets/icons/bamboo.svg";
import { ReactComponent as Travel } from "../assets/icons/travel.svg";
import { ReactComponent as Reuse } from "../assets/icons/reuse.svg";
import { ReactComponent as Tree } from "../assets/icons/tree.svg";
import Image from "../components/Image";
import PropTypes from "prop-types";
import ProductText from "./ProductText";

const DetailsContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  align-items: center;
  div {
    margin-top: 0;
    padding-top: 0;
    min-width: 350px;
  }
  h3 {
    margin-top: 0;
    padding-top: 0;
    text-align: left;
    color: var(--primary-color);
  }
  h5 {
    color: var(--primary-color);
    text-align: left;
  }
  p {
    color: var(--primary-color);
    height: auto;
    display: flex;
    overflow: visible;
  }
  img {
    border: 1px solid var(--icon-active-color);
  }
  h6 {
    color: var(--primary-color);
    text-align: left;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 0;
  }
  a {
    align-self: flex-end;
    width: 40%;
  }
`;

const ProductDetailsContainer = styled.div`
  background-image: var(--gradient);
  display: flex;
  flex-direction: column;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  max-width: 800px;
`;

const Button = styled.button`
  background-color: var(--primary-color);
  border-radius: 50px;
  color: var(--secondary-color);
  font-weight: bold;
  padding: 8px;
  margin: 15px;
  letter-spacing: 1;
  font-size: 0.9rem;
`;

const categoryStyle = css`
  margin: 15px;
  width: 50px;
  height: 50px;
  fill: white;
`;

const BambooIcon = styled(Bamboo)`
  ${categoryStyle}
`;
const TravelIcon = styled(Travel)`
  ${categoryStyle}
`;
const ReuseIcon = styled(Reuse)`
  ${categoryStyle}
`;
const TreeIcon = styled(Tree)`
  ${categoryStyle}
`;
const ProductDetails = ({
  src,
  alt,
  title,
  price,
  description,
  onClick,
  isFavorite,
  url,
  header,
  category,
}) => {
  return (
    <DetailsContainer>
      <Image src={src} alt={alt} onClick={onClick} isFavorite={isFavorite} />
      <ProductDetailsContainer>
        <h6>{header}</h6>
        <ProductText title={title} price={price} description={description} />
        <div>
          {category &&
            category.map((icon) => {
              return <div key={title}>{icon}</div>;
            })}
        </div>
        <a href={url}>
          <Button>Visit Website</Button>
        </a>
      </ProductDetailsContainer>
    </DetailsContainer>
  );
};

export default ProductDetails;

ProductDetails.propTypes = {
  onClick: PropTypes.func,
  isFavorite: PropTypes.bool,
  title: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  header: PropTypes.string,
  category: PropTypes.array,
};
