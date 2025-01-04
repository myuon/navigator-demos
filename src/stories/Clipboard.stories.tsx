import type { Meta, StoryObj } from "@storybook/react";

import { Clipboard } from "./Clipboard";

const meta = {
  component: Clipboard,
} satisfies Meta<typeof Clipboard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
