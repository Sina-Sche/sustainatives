import CategoryList from "../components/CategoryList";

export default {
  title: "Components/Lists",
  component: CategoryList,
};

const Template = (args) => <CategoryList {...args} />;

export const BrowseList = Template.bind({});
BrowseList.args = {
  title: "Bamboo",
  active: true,
};
