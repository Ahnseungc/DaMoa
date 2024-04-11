import React from "react";
import { StoryFn } from "@storybook/react";

import Button, { ButtonProps } from "./index";

export default {
  title: "Button",
  component: Button,
};

const Template: StoryFn<ButtonProps> = (args: any) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  buttonType: "default",
  isFull: false,
  children: "버튼",
};

export const Primary = Template.bind({});

Primary.args = {
  buttonType: "primary",
  isFull: false,
  children: "버튼",
};

export const Ghost = Template.bind({});

Ghost.args = {
  buttonType: "ghost",
  isFull: false,
  children: "버튼",
};