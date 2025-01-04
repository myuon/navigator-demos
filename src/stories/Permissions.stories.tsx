import type { Meta, StoryObj } from "@storybook/react";

import { Permissions } from "./Permissions";

const meta = {
  component: Permissions,
} satisfies Meta<typeof Permissions>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    apiSet: [
      "geolocation",
      "midi",
      "notifications",
      "push",
      "camera",
      "microphone",
    ],
  },
};
