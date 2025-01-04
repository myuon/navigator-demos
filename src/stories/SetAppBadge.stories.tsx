import type { Meta, StoryObj } from '@storybook/react';

import { SetAppBadge } from './SetAppBadge';

const meta = {
  component: SetAppBadge,
} satisfies Meta<typeof SetAppBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};