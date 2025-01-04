import type { Meta, StoryObj } from '@storybook/react';

import { MediaDevices } from './MediaDevices';

const meta = {
  component: MediaDevices,
} satisfies Meta<typeof MediaDevices>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};