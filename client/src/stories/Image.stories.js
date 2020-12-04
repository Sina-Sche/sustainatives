import Image from "../components/Image";
export default {
  title: "Components/Cards",
  component: Image,
};

const Template = (args) => <Image {...args} />;

export const BambookCard = Template.bind({});
BambookCard.args = {
  title: "Bambook",
};
