import type { Meta, StoryObj } from '@storybook/react';

import { CookieEnabled } from './CookieEnabled';

const meta = {
  component: CookieEnabled,
} satisfies Meta<typeof CookieEnabled>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};