import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "select" },
      description: "The visual style of the button",
    },
    children: {
      control: "text",
      description: "The content inside the button",
    },
    onPress: {
      action: "pressed",
      description: "Function called when button is pressed",
    },
  },
  // Add a decorative wrapper for better story presentation
  decorators: [
    (Story) => (
      <View style={{ padding: 16, maxWidth: 300 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const LongText: Story = {
  args: {
    variant: "primary",
    children: "This is a very long button text that might wrap",
  },
};

export const WithCustomAction: Story = {
  args: {
    variant: "primary",
    children: "Click Me",
    onPress: () => alert("Button clicked!"),
  },
};
