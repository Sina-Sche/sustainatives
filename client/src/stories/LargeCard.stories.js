import LargeCard from "../components/LargeCard";
export default {
  title: "Components/Cards",
  component: LargeCard,
};

const Template = (args) => <LargeCard {...args} />;

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
