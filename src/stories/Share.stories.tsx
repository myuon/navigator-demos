import type { Meta, StoryObj } from '@storybook/react';

import { Share } from './Share';

const meta = {
  component: Share,
} satisfies Meta<typeof Share>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};