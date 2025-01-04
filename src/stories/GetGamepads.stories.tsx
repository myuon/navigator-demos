import type { Meta, StoryObj } from '@storybook/react';

import { GetGamepads } from './GetGamepads';

const meta = {
  component: GetGamepads,
} satisfies Meta<typeof GetGamepads>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};