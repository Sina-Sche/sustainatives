import CategoryList from "../components/CategoryList";
export default {
  title: "Components/Cards",
  component: "CategoryList",
};

const Template = (args) => <CategoryList {...args} />;

export const CategoryListA = Template.bind({});
