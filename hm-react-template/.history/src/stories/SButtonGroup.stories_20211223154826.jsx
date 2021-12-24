import SButtonGroup from "../components/SButtonGroup";
import * as SButton from "./SButton.stories";

export default {
  title: "SComponent/SButtonGroup",
  component: SButtonGroup,
};

const Template = (args) => <SButtonGroup {...args} />;

export const Group = Template.bind({});
Group.args = {
  buttons: [{ ...SButton.Primary.args }, { ...SButton.Secondary.args }],
};
