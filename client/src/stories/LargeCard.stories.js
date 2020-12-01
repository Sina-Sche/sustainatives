import LargeCard from "../components/LargeCard";
export default {
  title: "Components/Cards",
  component: LargeCard,
};

const Template = (args) => <LargeCard {...args} />;

export const BambookCard = Template.bind({});
BambookCard.args = {
  title: "Bambook",
};
