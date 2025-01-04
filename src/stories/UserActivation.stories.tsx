import type { Meta, StoryObj } from "@storybook/react";

import { UserActivation } from "./UserActivation";

const meta = {
  component: UserActivation,
} satisfies Meta<typeof UserActivation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
