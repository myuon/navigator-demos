import type { Meta, StoryObj } from '@storybook/react';

import { Xr } from './Xr';

const meta = {
  component: Xr,
} satisfies Meta<typeof Xr>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};