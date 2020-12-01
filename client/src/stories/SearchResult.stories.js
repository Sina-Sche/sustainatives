import SearchResult from "../components/SearchResult";

export default {
  title: "Components/SearchPage",
  component: SearchResult,
};
const Template = (args) => <SearchResult {...args} />;

export const SearchResultOne = Template.bind({});
SearchResultOne.args = {};
