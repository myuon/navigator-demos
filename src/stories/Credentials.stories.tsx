import type { Meta, StoryObj } from '@storybook/react';

import { Credentials } from './Credentials';

const meta = {
  component: Credentials,
} satisfies Meta<typeof Credentials>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};