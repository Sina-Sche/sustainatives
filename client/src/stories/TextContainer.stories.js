import { TextContainer } from "../components/TextContainer";

export default {
  title: "Components/TextContainer",
  component: TextContainer,
};
const Template = (args) => <TextContainer {...args} />;

export const TextExample = Template.bind({});
TextExample.args = {
  title: "Lorem Ipsum",
};

export const TextField = Template.bind({});
TextField.args = {
  title: "Bambook",
};
