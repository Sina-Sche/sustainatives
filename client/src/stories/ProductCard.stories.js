import ProductPreview from "../components/ProductPreview";

export default {
  title: "Components/Cards",
  component: ProductPreview,
  parameters: { layout: "centered" },
};
const Template = (args) => <ProductPreview {...args} />;

export const ProductCardA = Template.bind({});
ProductCardA.args = {
  title: "Hairbrush",
};
