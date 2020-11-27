import { ProductCard } from "../components/ProductCard";

export default {
  title: "Components/Cards",
  component: ProductCard,
};
const Template = (args) => <ProductCard {...args} />;

export const ProductOneCard = Template.bind({});
ProductCard.args = {
  title: "Hairbrush",
};
