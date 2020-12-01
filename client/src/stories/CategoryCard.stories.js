import CategoryList from "../components/CategoryCard";
import { ReactComponent as Bamboo } from "../assets/icons/bamboo.svg";
import { ReactComponent as Travel } from "../assets/icons/travel.svg";
export default {
  title: "Components/Cards",
  component: "CategoryList",
};

const Template = (args) => <CategoryList {...args} />;

export const CategoryListA = Template.bind({});
