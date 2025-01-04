import type { Meta, StoryObj } from '@storybook/react';

import { Online } from './Online';

const meta = {
  component: Online,
} satisfies Meta<typeof Online>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};