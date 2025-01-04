import type { Meta, StoryObj } from '@storybook/react';

import { DeviceMemory } from './DeviceMemory';

const meta = {
  component: DeviceMemory,
} satisfies Meta<typeof DeviceMemory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};