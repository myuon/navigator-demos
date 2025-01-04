import type { Meta, StoryObj } from '@storybook/react';

import { Gpu } from './Gpu';

const meta = {
  component: Gpu,
} satisfies Meta<typeof Gpu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};