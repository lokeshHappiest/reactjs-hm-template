import React from "react";
import { Button } from "./../Button/Button";

export default {
  title: "Example/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Primary Button",
  size: "large",
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: "Secondary Button",
  size: "large",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
