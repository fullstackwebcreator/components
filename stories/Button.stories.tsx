import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Button } from "../components/button/Button"

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Elevated = Template.bind({})
Elevated.args = {
  label: "Button",
  variant: "elevated",
}

export const Filled = Template.bind({})
Filled.args = {
  label: "Button",
  variant: "filled",
}

export const Outlined = Template.bind({})
Outlined.args = {
  label: "Button",
  variant: "outlined",
}

export const Text = Template.bind({})
Text.args = {
  size: "small",
  label: "Button",
  variant: "text",
}
