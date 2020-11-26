import { Card } from "../components/Card";

export default {
  title: "Components/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const TextCard = Template.bind({});
TextCard.args = {
  title: "Bambook",
};
