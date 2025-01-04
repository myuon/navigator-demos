import type { Meta, StoryObj } from '@storybook/react';

import { HardwareConcurrency } from './HardwareConcurrency';

const meta = {
  component: HardwareConcurrency,
} satisfies Meta<typeof HardwareConcurrency>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};