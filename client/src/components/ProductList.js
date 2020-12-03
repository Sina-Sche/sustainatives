import styled from "styled-components/macro";
import ProductPreview from "./ProductPreview";
import Hairbrush from "../assets/images/hairbrush.jpg";

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;
  padding-top: 15px;
`;

const ProductList = () => {
  return (
    <ListContainer>
      <li>
        <ProductPreview src={Hairbrush} title={"Hairbrush"} size={"small"} />
      </li>
      <li>
        <ProductPreview src={Hairbrush} title={"Hairbrush"} size={"small"} />
      </li>
      <li>
        <ProductPreview src={Hairbrush} title={"Hairbrush"} size={"small"} />
      </li>
      <li>
        <ProductPreview src={Hairbrush} title={"Hairbrush"} size={"small"} />
      </li>
      <li>
        <ProductPreview src={Hairbrush} title={"Hairbrush"} size={"small"} />
      </li>
      <li>
        <ProductPreview src={Hairbrush} title={"Hairbrush"} size={"small"} />
      </li>
    </ListContainer>
  );
};

export default ProductList;
