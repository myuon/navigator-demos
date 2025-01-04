import type { Meta, StoryObj } from '@storybook/react';

import { UserAgent } from './UserAgent';

const meta = {
  component: UserAgent,
} satisfies Meta<typeof UserAgent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};