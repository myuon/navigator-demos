import type { Meta, StoryObj } from '@storybook/react';

import { MediaSession } from './MediaSession';

const meta = {
  component: MediaSession,
} satisfies Meta<typeof MediaSession>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};