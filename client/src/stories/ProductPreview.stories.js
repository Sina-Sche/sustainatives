import ProductPreview from "../components/ProductPreview";

export default {
  title: "Components/Previews",
  component: ProductPreview,
  parameters: { layout: "centered" },
};
const Template = (args) => <ProductPreview {...args} />;

export const ProductPreviewA = Template.bind({});
ProductPreviewA.args = {
  title: "Hairbrush",
};
