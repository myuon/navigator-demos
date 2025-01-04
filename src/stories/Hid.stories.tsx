import type { Meta, StoryObj } from '@storybook/react';

import { Hid } from './Hid';

const meta = {
  component: Hid,
} satisfies Meta<typeof Hid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};