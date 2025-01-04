import type { Meta, StoryObj } from '@storybook/react';

import { Usb } from './Usb';

const meta = {
  component: Usb,
} satisfies Meta<typeof Usb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};