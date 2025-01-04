import type { Meta, StoryObj } from '@storybook/react';

import { GetAutoplayPolicy } from './GetAutoplayPolicy';

const meta = {
  component: GetAutoplayPolicy,
} satisfies Meta<typeof GetAutoplayPolicy>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};