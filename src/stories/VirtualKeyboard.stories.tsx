import type { Meta, StoryObj } from '@storybook/react';

import { VirtualKeyboard } from './VirtualKeyboard';

const meta = {
  component: VirtualKeyboard,
} satisfies Meta<typeof VirtualKeyboard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};