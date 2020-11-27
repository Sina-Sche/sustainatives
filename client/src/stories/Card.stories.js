import { Card } from "../components/Card";

export default {
  title: "Components/Cards",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const BambookCard = Template.bind({});
BambookCard.args = {
  primary: true,
  title: "Bambook",
};

export const CoffeeCard = Template.bind({});
CoffeeCard.args = {
  primary: false,
  title: "Coffee Capsules",
};
