import type { Meta, StoryObj } from '@storybook/react';

import { Ink } from './Ink';

const meta = {
  component: Ink,
} satisfies Meta<typeof Ink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};