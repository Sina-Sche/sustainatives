import { Input } from "../components/Input";

export default {
  title: "Components/Input",
  component: "Input",
};

const Template = (args) => <Input {...args} />;

export const SearchInput = Template.bind({});
SearchInput.args = {
  placeholder: "e.g. notebook, bracelet...",
};
