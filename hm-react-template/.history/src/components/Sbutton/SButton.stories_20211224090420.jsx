import React from "react";
import SButton from "./../Sbutton/SButton";

export default {
  title: "SComponents/SButton",
  component: SButton,
};

const Template = (args) => <SButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Default",
  normal: true,
};

export const Primary = Template.bind({});
Primary.args = {
  title: "Primary",
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: "Secondary",
  primary: false,
};

export const Large = Template.bind({});
Large.args = {
  title: "Large",
  primary: false,
  size: "large",
};

export const Medium = Template.bind({});
Medium.args = {
  title: "Medium",
  primary: false,
  size: "medium",
};

export const Small = Template.bind({});
Small.args = {
  title: "Small",
  primary: false,
  size: "small",
};
