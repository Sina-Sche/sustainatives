import { CategoryCard } from "../components/CategoryCard";

export default {
  title: "Components/Cards",
  component: CategoryCard,
};

const Template = (args) => <CategoryCard {...args} />;

export const CategoryOne = Template.bind({});
CategoryOne.args = {
  title: "Plant a tree",
  active: true,
};
