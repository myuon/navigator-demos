import type { Meta, StoryObj } from '@storybook/react';

import { GetBattery } from './GetBattery';

const meta = {
  component: GetBattery,
} satisfies Meta<typeof GetBattery>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};