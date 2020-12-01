import ProductText from "../components/ProductText";

export default {
  title: "Components/Text",
  component: ProductText,
};

const Template = (args) => <ProductText {...args} />;

export const ProductExample = Template.bind({});
ProductExample.args = {};
