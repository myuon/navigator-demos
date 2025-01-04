import type { Meta, StoryObj } from '@storybook/react';

import { Bluetooth } from './Bluetooth';

const meta = {
  component: Bluetooth,
} satisfies Meta<typeof Bluetooth>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};