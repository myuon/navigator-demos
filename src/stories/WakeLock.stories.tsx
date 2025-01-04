import type { Meta, StoryObj } from '@storybook/react';

import { WakeLock } from './WakeLock';

const meta = {
  component: WakeLock,
} satisfies Meta<typeof WakeLock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};