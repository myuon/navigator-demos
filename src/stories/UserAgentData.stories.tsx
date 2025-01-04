import type { Meta, StoryObj } from "@storybook/react";

import { UserAgentData } from "./UserAgentData";

const meta = {
  component: UserAgentData,
} satisfies Meta<typeof UserAgentData>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    hints: [
      "architecture",
      "bitness",
      "formFactor",
      "fullVersionList",
      "model",
      "platformVersion",
      "wow64",
    ],
  },
};
