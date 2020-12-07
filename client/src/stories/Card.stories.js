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

export const CoffeeCard = Template.bind({});
CoffeeCard.args = {
  title: "Coffee Capsules",
};
