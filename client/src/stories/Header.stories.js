import Header from "../components/Header";

export default {
  title: "Components/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Home = Template.bind({});
Home.args = {
  title: "SustainAtives",
};

export const Browse = Template.bind({});
Browse.args = {
  title: "Browse",
};

export const SearchResults = Template.bind({});
SearchResults.args = {
  title: "Search results",
};
export const Discover = Template.bind({});
Discover.args = {
  title: "Discover",
};
