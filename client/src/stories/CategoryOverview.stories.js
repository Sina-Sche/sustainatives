import CategoryOverview from "../components/CategoryOverview";
export default {
  title: "Components/Cards",
  component: "CategoryList",
};

const Template = (args) => <CategoryOverview {...args} />;

export const CategoryListA = Template.bind({});
