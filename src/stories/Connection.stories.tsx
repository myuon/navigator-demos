import type { Meta, StoryObj } from '@storybook/react';

import { Connection } from './Connection';

const meta = {
  component: Connection,
} satisfies Meta<typeof Connection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};