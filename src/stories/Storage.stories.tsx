import type { Meta, StoryObj } from '@storybook/react';

import { Storage } from './Storage';

const meta = {
  component: Storage,
} satisfies Meta<typeof Storage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};