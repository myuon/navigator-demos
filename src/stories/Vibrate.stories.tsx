import type { Meta, StoryObj } from '@storybook/react';

import { Vibrate } from './Vibrate';

const meta = {
  component: Vibrate,
} satisfies Meta<typeof Vibrate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};