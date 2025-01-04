import type { Meta, StoryObj } from '@storybook/react';

import { Locks } from './Locks';

const meta = {
  component: Locks,
} satisfies Meta<typeof Locks>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};