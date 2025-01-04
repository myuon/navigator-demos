import type { Meta, StoryObj } from '@storybook/react';

import { SendBeacon } from './SendBecon';

const meta = {
  component: SendBeacon,
} satisfies Meta<typeof SendBeacon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};