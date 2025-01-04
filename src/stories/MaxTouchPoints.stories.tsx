import type { Meta, StoryObj } from '@storybook/react';

import { MaxTouchPoints } from './MaxTouchPoints';

const meta = {
  component: MaxTouchPoints,
} satisfies Meta<typeof MaxTouchPoints>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};