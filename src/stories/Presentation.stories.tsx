import type { Meta, StoryObj } from '@storybook/react';

import { Presentation } from './Presentation';

const meta = {
  component: Presentation,
} satisfies Meta<typeof Presentation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};